# PlutoPay Node.js SDK

The official [PlutoPay](https://plutopayus.com) SDK for Node.js — accept card, ACH, terminal, and hosted-checkout payments from TypeScript or JavaScript.

- 📘 Docs: **https://docs.plutopayus.com**
- 🧩 Typed methods for every endpoint, generated from the [OpenAPI spec](./openapi.yaml)
- 🔁 Automatic retries with backoff on `429` / `5xx`
- 🔐 Webhook signature verification helper
- 💵 All amounts are integers in cents

## Install

```bash
npm install @plutopay/node
```

Requires Node.js 18+ (uses the built-in `fetch`). Ships ESM + CommonJS + types.

## Quick start

```ts
import PlutoPay from '@plutopay/node';

const pluto = new PlutoPay({ apiKey: process.env.PLUTOPAY_SECRET_KEY! });

// Create a card payment ($47.50)
const txn = await pluto.transactions.createPayment({
  createTransactionRequest: {
    amount: 4750,
    currency: 'usd',
    paymentMethodType: 'card',
    description: 'Order #1001',
  },
  idempotencyKey: 'order_1001',
});

console.log(txn.data?.id, txn.clientSecret);
```

> Money is always in the smallest currency unit — `4750` = `$47.50`.

## Configuration

```ts
new PlutoPay({
  apiKey: 'sk_live_…',           // required
  baseUrl: 'https://plutopayus.com/api', // optional
  maxRetries: 2,                  // optional — retries on 429/5xx (default 2)
});
```

Authentication is your **secret** key as a Bearer token, set once at construction.

## Using with Next.js / React

The SDK is **server-side** (it holds your secret key). Create the payment on the server, then confirm it on the client with the returned `client_secret` and your **publishable** key.

### 1 · Server — a Next.js Route Handler (App Router)

```ts
// app/api/checkout/route.ts
import PlutoPay from '@plutopay/node';
import { NextResponse } from 'next/server';

const pluto = new PlutoPay({ apiKey: process.env.PLUTOPAY_SECRET_KEY! });

export async function POST(req: Request) {
  const { amount } = await req.json();
  const txn = await pluto.transactions.createPayment({
    createTransactionRequest: { amount, currency: 'usd', paymentMethodType: 'card' },
    idempotencyKey: crypto.randomUUID(),
  });
  return NextResponse.json({ clientSecret: txn.clientSecret });
}
```

> In a **Server Action** it's the same — call `pluto.transactions.createPayment(...)` inside the action and return `clientSecret` to the client. Never import `@plutopay/node` into a Client Component; the secret key must stay on the server.

### 2 · Client — a React component with the Payment Element

Card entry uses Stripe.js (`@stripe/stripe-js` + `@stripe/react-stripe-js`) so the card never touches your server (PCI SAQ A). Feed it the `clientSecret` from step 1 and your **publishable** key:

```tsx
'use client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PLUTOPAY_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/thanks` },
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Pay</button>
    </form>
  );
}

export default function Checkout({ amount }: { amount: number }) {
  const [clientSecret, setClientSecret] = useState<string>();
  useEffect(() => {
    fetch('/api/checkout', { method: 'POST', body: JSON.stringify({ amount }) })
      .then((r) => r.json())
      .then((d) => setClientSecret(d.clientSecret));
  }, [amount]);

  if (!clientSecret) return null;
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
```

The final state arrives by [webhook](https://docs.plutopayus.com/guides/webhooks.html) (`payment.succeeded`) — fulfill the order there, not on the browser redirect.

**Prefer no client code?** Create a hosted checkout on the server and redirect:

```ts
const session = await pluto.checkout.createCheckoutSession({
  createCheckoutSessionRequest: { amount: 4750, currency: 'usd', successUrl: `${origin}/thanks` },
});
redirect(session.data!.url!); // Next.js redirect()
```

## Resources

`pluto.transactions`, `pluto.checkout`, `pluto.paymentLinks`, `pluto.refunds`, `pluto.terminal`, `pluto.customers`, `pluto.payouts`, `pluto.disputes`, `pluto.merchant`.

```ts
// Hosted checkout session
const session = await pluto.checkout.createCheckoutSession({
  createCheckoutSessionRequest: { amount: 4750, currency: 'usd', successUrl: 'https://you/thanks' },
});
console.log(session.data?.url);

// Payment link
const link = await pluto.paymentLinks.createPaymentLink({
  createPaymentLinkRequest: { amount: 4750, currency: 'usd', description: 'Invoice #1001' },
});

// Refund
await pluto.refunds.createRefund({ transaction: txn.data.id, createRefundRequest: { amount: 4750 } });
```

## Idempotency

Pass `idempotencyKey` on any create call — safe to retry, and the key is echoed back on the response.

```ts
await pluto.transactions.createPayment({
  createTransactionRequest: { amount: 4750, currency: 'usd' },
  idempotencyKey: 'order_1001',
});
```

## Pagination

```ts
import { autoPaginate } from '@plutopay/node';

for await (const txn of autoPaginate((page) => pluto.transactions.listTransactions({ page }))) {
  console.log(txn.id);
}
```

## Errors

Non-2xx responses throw a typed `PlutoPayError` mapping the canonical error envelope:

```ts
import { PlutoPayError } from '@plutopay/node';

try {
  await pluto.transactions.createPayment({ createTransactionRequest: { amount: 1 } });
} catch (err) {
  if (err instanceof PlutoPayError) {
    console.log(err.status, err.type, err.code, err.param, err.message);
  }
}
```

## Verifying webhooks

```ts
import { constructEvent } from '@plutopay/node';

// Express — capture the RAW body
app.post('/webhooks/plutopay', express.raw({ type: 'application/json' }), (req, res) => {
  try {
    const event = constructEvent(
      req.body.toString('utf8'),
      req.header('X-PlutoPay-Signature'),
      process.env.PLUTOPAY_WEBHOOK_SECRET,
    );
    // handle event.type …
    res.sendStatus(200);
  } catch {
    res.status(400).send('invalid signature');
  }
});
```

`verifyWebhookSignature(rawBody, header, secret)` is also exported if you only need the boolean check.

## Regenerating

The client is generated from `openapi.yaml` (the single source of truth). After updating the spec:

```bash
npm run generate && npm run build && npm test
```

## License

[MIT](./LICENSE)

// Run: PLUTOPAY_SECRET_KEY=sk_test_… node examples/basic.mjs
import PlutoPay from '@plutopay/node';

const pluto = new PlutoPay({ apiKey: process.env.PLUTOPAY_SECRET_KEY });

// Create a $47.50 card payment
const txn = await pluto.transactions.createPayment({
  createTransactionRequest: {
    amount: 4750,
    currency: 'usd',
    paymentMethodType: 'card',
    description: 'Order #1001',
  },
  idempotencyKey: 'order_1001',
});

console.log('transaction:', txn.data?.id, 'status:', txn.data?.status);
console.log('client_secret:', txn.clientSecret);

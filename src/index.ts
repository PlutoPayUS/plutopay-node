import { Configuration } from './generated/runtime';
import {
  TransactionsApi,
  CheckoutApi,
  PaymentLinksApi,
  RefundsApi,
  TerminalApi,
  CustomersApi,
  PayoutsApi,
  DisputesApi,
  MerchantApi,
} from './generated/apis';
import { retryingFetch } from './http';
import { toPlutoPayError } from './errors';

/** Wrap an API instance so thrown ResponseErrors become typed PlutoPayErrors. */
function errorProxy<T extends object>(api: T): T {
  return new Proxy(api, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (typeof value !== 'function') return value;
      return (...args: unknown[]) => {
        const out = (value as (...a: unknown[]) => unknown).apply(target, args);
        return out instanceof Promise
          ? out.catch(async (e: unknown) => {
              throw await toPlutoPayError(e);
            })
          : out;
      };
    },
  });
}

export interface PlutoPayOptions {
  /** Your secret API key (`sk_live_…` / `sk_test_…`). */
  apiKey: string;
  /** Override the API base URL. Defaults to https://plutopayus.com/api */
  baseUrl?: string;
  /** Max automatic retries on 429/5xx. Default 2. */
  maxRetries?: number;
  /** Custom fetch implementation (defaults to global fetch). */
  fetch?: typeof fetch;
}

/**
 * The PlutoPay API client.
 *
 *   import PlutoPay from '@plutopay/node';
 *   const pluto = new PlutoPay({ apiKey: process.env.PLUTOPAY_SECRET_KEY });
 *   const txn = await pluto.transactions.createPayment({
 *     createTransactionRequest: { amount: 4750, currency: 'usd' },
 *     idempotencyKey: 'order_1001',
 *   });
 */
export class PlutoPay {
  readonly transactions: TransactionsApi;
  readonly checkout: CheckoutApi;
  readonly paymentLinks: PaymentLinksApi;
  readonly refunds: RefundsApi;
  readonly terminal: TerminalApi;
  readonly customers: CustomersApi;
  readonly payouts: PayoutsApi;
  readonly disputes: DisputesApi;
  readonly merchant: MerchantApi;

  constructor(options: PlutoPayOptions) {
    if (!options?.apiKey) throw new Error('PlutoPay: `apiKey` is required');
    const baseFetch = options.fetch ?? fetch;
    const config = new Configuration({
      basePath: options.baseUrl ?? 'https://plutopayus.com/api',
      accessToken: options.apiKey,
      fetchApi: retryingFetch(options.maxRetries ?? 2, baseFetch),
    });

    this.transactions = errorProxy(new TransactionsApi(config));
    this.checkout = errorProxy(new CheckoutApi(config));
    this.paymentLinks = errorProxy(new PaymentLinksApi(config));
    this.refunds = errorProxy(new RefundsApi(config));
    this.terminal = errorProxy(new TerminalApi(config));
    this.customers = errorProxy(new CustomersApi(config));
    this.payouts = errorProxy(new PayoutsApi(config));
    this.disputes = errorProxy(new DisputesApi(config));
    this.merchant = errorProxy(new MerchantApi(config));
  }
}

export { verifyWebhookSignature, constructEvent } from './webhooks';
export type { PlutoPayEvent } from './webhooks';
export { PlutoPayError } from './errors';
export { autoPaginate } from './pagination';
export type { Page } from './pagination';
export * from './generated/models';

export default PlutoPay;

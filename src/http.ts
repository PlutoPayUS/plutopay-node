import type { FetchAPI } from './generated/runtime';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Wraps a fetch implementation with automatic retries + exponential backoff on
 * 429 and 5xx responses. Honors a numeric `Retry-After` header when present.
 * Request bodies are JSON strings, so re-issuing the same request is safe.
 */
export function retryingFetch(maxRetries: number, baseFetch: FetchAPI): FetchAPI {
  return async (input, init) => {
    let attempt = 0;
    for (;;) {
      const res = await baseFetch(input, init);
      const retryable = res.status === 429 || res.status >= 500;
      if (!retryable || attempt >= maxRetries) return res;

      const retryAfter = Number(res.headers.get('retry-after'));
      const backoff =
        Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : Math.min(500 * 2 ** attempt, 8000);
      const jitter = Math.floor(backoff * 0.2 * Math.random());
      await sleep(backoff + jitter);
      attempt++;
    }
  };
}

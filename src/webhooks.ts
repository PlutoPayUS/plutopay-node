import { createHmac, timingSafeEqual } from 'node:crypto';

export interface PlutoPayEvent {
  id: string;
  type: string;
  created_at?: string;
  data: Record<string, unknown>;
}

/**
 * Verify a PlutoPay webhook signature.
 *
 * The `PlutoPay-Signature` header is `t={timestamp},v1={signature}`, where
 * `signature = HMAC_SHA256(secret, "{timestamp}.{rawBody}")`. Always verify
 * against the RAW request body bytes, before any JSON parsing.
 */
export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
  toleranceSeconds = 300,
): boolean {
  if (!signatureHeader) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(',').map((kv) => {
      const i = kv.indexOf('=');
      return [kv.slice(0, i).trim(), kv.slice(i + 1).trim()];
    }),
  );
  const timestamp = parts.t;
  const provided = parts.v1;
  if (!timestamp || !provided) return false;

  // Replay protection
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > toleranceSeconds) return false;

  const expected = createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(provided);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Verify the signature and return the parsed event, or throw if verification fails. */
export function constructEvent(
  rawBody: string,
  signatureHeader: string,
  secret: string,
  toleranceSeconds = 300,
): PlutoPayEvent {
  if (!verifyWebhookSignature(rawBody, signatureHeader, secret, toleranceSeconds)) {
    throw new Error('Invalid PlutoPay webhook signature');
  }
  return JSON.parse(rawBody) as PlutoPayEvent;
}

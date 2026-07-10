import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { verifyWebhookSignature, constructEvent, PlutoPay } from '../dist/index.js';

const secret = 'whsec_testsecret';
const body = JSON.stringify({
  id: 'evt_1',
  type: 'payment.succeeded',
  data: { id: 'txn_1', amount: 4750 },
});
const t = Math.floor(Date.now() / 1000);
const sign = (ts, b, s = secret) => createHmac('sha256', s).update(`${ts}.${b}`).digest('hex');
const header = `t=${t},v1=${sign(t, body)}`;

test('valid signature verifies', () => {
  assert.equal(verifyWebhookSignature(body, header, secret), true);
});

test('tampered body is rejected', () => {
  assert.equal(verifyWebhookSignature(body + 'x', header, secret), false);
});

test('wrong secret is rejected', () => {
  assert.equal(verifyWebhookSignature(body, header, 'whsec_wrong'), false);
});

test('stale timestamp is rejected (replay protection)', () => {
  const old = t - 10_000;
  assert.equal(verifyWebhookSignature(body, `t=${old},v1=${sign(old, body)}`, secret), false);
});

test('constructEvent returns the parsed event', () => {
  const evt = constructEvent(body, header, secret);
  assert.equal(evt.type, 'payment.succeeded');
  assert.equal(evt.data.amount, 4750);
});

test('constructEvent throws on a bad signature', () => {
  assert.throws(() => constructEvent(body, `t=${t},v1=deadbeef`, secret), /Invalid PlutoPay webhook signature/);
});

test('client requires an apiKey', () => {
  assert.throws(() => new PlutoPay({}), /apiKey/);
});

test('client exposes the resource groups', () => {
  const pluto = new PlutoPay({ apiKey: 'sk_test_x' });
  for (const r of ['transactions', 'checkout', 'paymentLinks', 'refunds', 'terminal', 'customers', 'payouts', 'disputes', 'merchant']) {
    assert.ok(pluto[r], `missing resource: ${r}`);
  }
});

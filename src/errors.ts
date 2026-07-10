import { ResponseError } from './generated/runtime';

export interface PlutoPayErrorFields {
  type: string;
  message: string;
  code?: string;
  param?: string;
}

/**
 * A typed error mapped from PlutoPay's canonical error envelope:
 *   { "error": { "type", "message", "code?", "param?" } }
 */
export class PlutoPayError extends Error {
  readonly type: string;
  readonly code?: string;
  readonly param?: string;
  readonly status: number;

  constructor(status: number, fields: PlutoPayErrorFields) {
    super(fields.message);
    this.name = 'PlutoPayError';
    this.type = fields.type;
    this.code = fields.code;
    this.param = fields.param;
    this.status = status;
  }
}

/** Convert a generated ResponseError into a typed PlutoPayError; pass anything else through. */
export async function toPlutoPayError(e: unknown): Promise<unknown> {
  if (e instanceof ResponseError) {
    let body: { error?: PlutoPayErrorFields } = {};
    try {
      body = await e.response.clone().json();
    } catch {
      /* non-JSON body */
    }
    const env = body?.error;
    return new PlutoPayError(e.response.status, {
      type: env?.type ?? 'api_error',
      message: env?.message ?? e.message,
      code: env?.code,
      param: env?.param,
    });
  }
  return e;
}

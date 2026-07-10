#!/usr/bin/env bash
# Regenerate the generated client from the vendored OpenAPI spec.
# The spec (openapi.yaml) is the single source of truth — copy an updated copy
# in from the backend's docs/api/openapi.yaml, then run this.
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf src/generated
npx --yes @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g typescript-fetch \
  -o src/generated \
  --additional-properties=supportsES6=true,typescriptThreePlus=true,modelPropertyNaming=original

# The OpenAPI `webhooks:` section makes the generator emit an unused, malformed
# DefaultApi stub (webhooks are inbound events, not client operations — they are
# handled by src/webhooks.ts). Remove it.
rm -f src/generated/apis/DefaultApi.ts

echo "Regenerated src/generated from openapi.yaml"

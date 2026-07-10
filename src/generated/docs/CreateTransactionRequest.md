
# CreateTransactionRequest


## Properties

Name | Type
------------ | -------------
`amount` | number
`currency` | string
`payment_method` | string
`payment_method_type` | string
`confirm` | boolean
`capture_method` | string
`customer_id` | string
`description` | string
`receipt_email` | string
`return_url` | string
`metadata` | { [key: string]: any; }
`idempotency_key` | string
`billing_address` | { [key: string]: any; }
`shipping_address` | { [key: string]: any; }
`mandate` | { [key: string]: any; }

## Example

```typescript
import type { CreateTransactionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
  "payment_method": null,
  "payment_method_type": null,
  "confirm": null,
  "capture_method": null,
  "customer_id": null,
  "description": null,
  "receipt_email": null,
  "return_url": null,
  "metadata": null,
  "idempotency_key": null,
  "billing_address": null,
  "shipping_address": null,
  "mandate": null,
} satisfies CreateTransactionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTransactionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



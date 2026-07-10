
# PaymentLink


## Properties

Name | Type
------------ | -------------
`id` | string
`reference` | string
`url` | string
`amount` | number
`currency` | string
`status` | string
`description` | string
`customer_email` | string
`transaction_id` | string
`payment_intent_id` | string
`success_url` | string
`cancel_url` | string
`metadata` | { [key: string]: any; }
`is_test` | boolean
`expires_at` | Date
`completed_at` | Date
`created_at` | Date

## Example

```typescript
import type { PaymentLink } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reference": pl_a1b2c3,
  "url": null,
  "amount": 4750,
  "currency": USD,
  "status": null,
  "description": null,
  "customer_email": null,
  "transaction_id": null,
  "payment_intent_id": null,
  "success_url": null,
  "cancel_url": null,
  "metadata": null,
  "is_test": null,
  "expires_at": null,
  "completed_at": null,
  "created_at": null,
} satisfies PaymentLink

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentLink
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



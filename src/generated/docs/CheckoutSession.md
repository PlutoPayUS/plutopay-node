
# CheckoutSession


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
`expires_at` | Date
`completed_at` | Date
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CheckoutSession } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reference": cs_a1b2c3,
  "url": null,
  "amount": 4750,
  "currency": usd,
  "status": null,
  "description": null,
  "customer_email": null,
  "transaction_id": null,
  "payment_intent_id": null,
  "expires_at": null,
  "completed_at": null,
  "metadata": null,
} satisfies CheckoutSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckoutSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



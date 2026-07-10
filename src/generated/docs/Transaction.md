
# Transaction


## Properties

Name | Type
------------ | -------------
`id` | string
`reference` | string
`type` | string
`status` | [TransactionStatus](TransactionStatus.md)
`status_badge` | string
`amount` | number
`amount_refunded` | number
`currency` | string
`payment_method_type` | string
`card_brand` | string
`card_last_four` | string
`description` | string
`receipt_email` | string
`source` | string
`is_test` | boolean
`customer_id` | string
`terminal_id` | string
`metadata` | { [key: string]: any; }
`captured_at` | Date
`failed_at` | Date
`refunded_at` | Date
`disputed_at` | Date
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Transaction } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reference": txn_a1b2c3,
  "type": payment,
  "status": null,
  "status_badge": null,
  "amount": 4750,
  "amount_refunded": 4750,
  "currency": usd,
  "payment_method_type": card,
  "card_brand": null,
  "card_last_four": null,
  "description": null,
  "receipt_email": null,
  "source": null,
  "is_test": null,
  "customer_id": null,
  "terminal_id": null,
  "metadata": null,
  "captured_at": null,
  "failed_at": null,
  "refunded_at": null,
  "disputed_at": null,
  "created_at": null,
  "updated_at": null,
} satisfies Transaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Transaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



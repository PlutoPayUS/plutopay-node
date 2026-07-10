
# Dispute


## Properties

Name | Type
------------ | -------------
`id` | string
`reference` | string
`transaction_id` | string
`status` | string
`amount` | number
`currency` | string
`reason` | string
`evidence` | string
`is_test` | boolean
`metadata` | { [key: string]: any; }
`evidence_due_at` | Date
`resolved_at` | Date
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Dispute } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reference": null,
  "transaction_id": null,
  "status": open,
  "amount": 4750,
  "currency": USD,
  "reason": null,
  "evidence": null,
  "is_test": null,
  "metadata": null,
  "evidence_due_at": null,
  "resolved_at": null,
  "created_at": null,
  "updated_at": null,
} satisfies Dispute

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Dispute
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



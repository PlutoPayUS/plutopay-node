
# Payout


## Properties

Name | Type
------------ | -------------
`id` | string
`reference` | string
`status` | string
`amount` | number
`fee` | number
`net_amount` | number
`currency` | string
`destination_type` | string
`destination_last_four` | string
`failure_reason` | string
`is_test` | boolean
`metadata` | { [key: string]: any; }
`estimated_arrival_at` | Date
`arrived_at` | Date
`failed_at` | Date
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Payout } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "reference": null,
  "status": paid,
  "amount": 4750,
  "fee": 4750,
  "net_amount": 4750,
  "currency": USD,
  "destination_type": null,
  "destination_last_four": null,
  "failure_reason": null,
  "is_test": null,
  "metadata": null,
  "estimated_arrival_at": null,
  "arrived_at": null,
  "failed_at": null,
  "created_at": null,
  "updated_at": null,
} satisfies Payout

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Payout
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



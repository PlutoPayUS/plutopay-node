
# Customer


## Properties

Name | Type
------------ | -------------
`id` | string
`external_id` | string
`name` | string
`email` | string
`phone` | string
`address_line1` | string
`address_line2` | string
`city` | string
`state` | string
`postal_code` | string
`country` | string
`transactions_count` | number
`total_spent` | number
`metadata` | { [key: string]: any; }
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Customer } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "external_id": null,
  "name": null,
  "email": null,
  "phone": null,
  "address_line1": null,
  "address_line2": null,
  "city": null,
  "state": null,
  "postal_code": null,
  "country": null,
  "transactions_count": null,
  "total_spent": 4750,
  "metadata": null,
  "created_at": null,
  "updated_at": null,
} satisfies Customer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Customer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



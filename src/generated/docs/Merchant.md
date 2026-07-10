
# Merchant


## Properties

Name | Type
------------ | -------------
`id` | string
`business_name` | string
`email` | string
`default_currency` | string
`test_mode` | boolean

## Example

```typescript
import type { Merchant } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "business_name": null,
  "email": null,
  "default_currency": usd,
  "test_mode": null,
} satisfies Merchant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Merchant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



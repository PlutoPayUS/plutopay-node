
# CreatePaymentLinkRequest


## Properties

Name | Type
------------ | -------------
`amount` | number
`currency` | string
`description` | string
`customer_email` | string
`success_url` | string
`cancel_url` | string
`expires_in` | number
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CreatePaymentLinkRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
  "description": null,
  "customer_email": null,
  "success_url": null,
  "cancel_url": null,
  "expires_in": null,
  "metadata": null,
} satisfies CreatePaymentLinkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatePaymentLinkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



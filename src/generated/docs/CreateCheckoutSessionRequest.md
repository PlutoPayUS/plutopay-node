
# CreateCheckoutSessionRequest


## Properties

Name | Type
------------ | -------------
`amount` | number
`currency` | string
`description` | string
`customer_email` | string
`customer_name` | string
`success_url` | string
`cancel_url` | string
`payment_method_types` | Array&lt;string&gt;
`collect_email` | boolean
`collect_name` | boolean
`collect_phone` | boolean
`collect_address` | boolean
`metadata` | { [key: string]: any; }
`expires_in` | number

## Example

```typescript
import type { CreateCheckoutSessionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
  "description": null,
  "customer_email": null,
  "customer_name": null,
  "success_url": null,
  "cancel_url": null,
  "payment_method_types": null,
  "collect_email": null,
  "collect_name": null,
  "collect_phone": null,
  "collect_address": null,
  "metadata": null,
  "expires_in": null,
} satisfies CreateCheckoutSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCheckoutSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



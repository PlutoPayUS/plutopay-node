
# ProcessTerminalPaymentRequest


## Properties

Name | Type
------------ | -------------
`payment_intent_id` | string
`reader_id` | string

## Example

```typescript
import type { ProcessTerminalPaymentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "payment_intent_id": null,
  "reader_id": null,
} satisfies ProcessTerminalPaymentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProcessTerminalPaymentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# CustomerWriteRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`name` | string
`phone` | string
`external_id` | string
`address_line1` | string
`address_line2` | string
`city` | string
`state` | string
`postal_code` | string
`country` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CustomerWriteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "name": null,
  "phone": null,
  "external_id": null,
  "address_line1": null,
  "address_line2": null,
  "city": null,
  "state": null,
  "postal_code": null,
  "country": null,
  "metadata": null,
} satisfies CustomerWriteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerWriteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



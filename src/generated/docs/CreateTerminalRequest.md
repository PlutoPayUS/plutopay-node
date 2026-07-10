
# CreateTerminalRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`registration_code` | string
`location_name` | string
`location_address` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { CreateTerminalRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "registration_code": null,
  "location_name": null,
  "location_address": null,
  "metadata": null,
} satisfies CreateTerminalRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTerminalRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



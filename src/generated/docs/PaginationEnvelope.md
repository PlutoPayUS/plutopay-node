
# PaginationEnvelope


## Properties

Name | Type
------------ | -------------
`data` | Array&lt;any&gt;
`totalCount` | number
`page` | number
`size` | number
`lastPage` | number

## Example

```typescript
import type { PaginationEnvelope } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "totalCount": null,
  "page": null,
  "size": null,
  "lastPage": null,
} satisfies PaginationEnvelope

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginationEnvelope
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



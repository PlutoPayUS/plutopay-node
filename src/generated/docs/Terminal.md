
# Terminal

A registered card-present reader/terminal.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`status` | string
`location_name` | string
`location_address` | string
`metadata` | { [key: string]: any; }
`created_at` | Date
`updated_at` | Date

## Example

```typescript
import type { Terminal } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "status": null,
  "location_name": null,
  "location_address": null,
  "metadata": null,
  "created_at": null,
  "updated_at": null,
} satisfies Terminal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Terminal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



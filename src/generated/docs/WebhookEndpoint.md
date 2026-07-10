
# WebhookEndpoint


## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`events` | [Array&lt;WebhookEventType&gt;](WebhookEventType.md)
`status` | string
`description` | string
`created_at` | Date

## Example

```typescript
import type { WebhookEndpoint } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "url": null,
  "events": null,
  "status": null,
  "description": null,
  "created_at": null,
} satisfies WebhookEndpoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEndpoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



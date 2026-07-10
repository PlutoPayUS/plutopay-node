# DefaultApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**eventPost**](DefaultApi.md#eventpost) | **POST** /event | Event delivery |



## eventPost

> eventPost(webhookEvent)

Event delivery

PlutoPay POSTs a signed JSON event to each configured webhook endpoint. Verify the &#x60;PlutoPay-Signature&#x60; header (HMAC-SHA256, &#x60;t&#x3D;&#x60;/&#x60;v1&#x3D;&#x60; format) against the endpoint\&#39;s signing secret before trusting the payload. 

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { EventPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // WebhookEvent (optional)
    webhookEvent: ...,
  } satisfies EventPostRequest;

  try {
    const data = await api.eventPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookEvent** | [WebhookEvent](WebhookEvent.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return 2xx to acknowledge receipt. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


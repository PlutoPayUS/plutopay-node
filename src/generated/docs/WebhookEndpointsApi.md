# WebhookEndpointsApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookEndpoint**](WebhookEndpointsApi.md#createwebhookendpointoperation) | **POST** /v1/webhook-endpoints | Create a webhook endpoint |
| [**deleteWebhookEndpoint**](WebhookEndpointsApi.md#deletewebhookendpoint) | **DELETE** /v1/webhook-endpoints/{webhook_endpoint} | Delete a webhook endpoint |
| [**getWebhookEndpoint**](WebhookEndpointsApi.md#getwebhookendpoint) | **GET** /v1/webhook-endpoints/{webhook_endpoint} | Retrieve a webhook endpoint |
| [**listWebhookEndpoints**](WebhookEndpointsApi.md#listwebhookendpoints) | **GET** /v1/webhook-endpoints | List webhook endpoints |
| [**testWebhookEndpoint**](WebhookEndpointsApi.md#testwebhookendpoint) | **POST** /v1/webhook-endpoints/{endpoint}/test | Send a test event to a webhook endpoint |
| [**updateWebhookEndpoint**](WebhookEndpointsApi.md#updatewebhookendpointoperation) | **PUT** /v1/webhook-endpoints/{webhook_endpoint} | Update a webhook endpoint |



## createWebhookEndpoint

> CreateWebhookEndpoint201Response createWebhookEndpoint(createWebhookEndpointRequest)

Create a webhook endpoint

The signing &#x60;secret&#x60; is returned once, on creation.

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { CreateWebhookEndpointOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // CreateWebhookEndpointRequest
    createWebhookEndpointRequest: ...,
  } satisfies CreateWebhookEndpointOperationRequest;

  try {
    const data = await api.createWebhookEndpoint(body);
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
| **createWebhookEndpointRequest** | [CreateWebhookEndpointRequest](CreateWebhookEndpointRequest.md) |  | |

### Return type

[**CreateWebhookEndpoint201Response**](CreateWebhookEndpoint201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook endpoint created |  -  |
| **422** | One or more request parameters were invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhookEndpoint

> DeleteTerminal200Response deleteWebhookEndpoint(webhookEndpoint)

Delete a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { DeleteWebhookEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // string
    webhookEndpoint: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookEndpointRequest;

  try {
    const data = await api.deleteWebhookEndpoint(body);
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
| **webhookEndpoint** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteTerminal200Response**](DeleteTerminal200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhookEndpoint

> GetWebhookEndpoint200Response getWebhookEndpoint(webhookEndpoint)

Retrieve a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { GetWebhookEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // string
    webhookEndpoint: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookEndpointRequest;

  try {
    const data = await api.getWebhookEndpoint(body);
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
| **webhookEndpoint** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetWebhookEndpoint200Response**](GetWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The webhook endpoint |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhookEndpoints

> ListWebhookEndpoints200Response listWebhookEndpoints(page)

List webhook endpoints

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { ListWebhookEndpointsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // number (optional)
    page: 56,
  } satisfies ListWebhookEndpointsRequest;

  try {
    const data = await api.listWebhookEndpoints(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |

### Return type

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of webhook endpoints |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhookEndpoint

> object testWebhookEndpoint(endpoint)

Send a test event to a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { TestWebhookEndpointRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // string
    endpoint: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TestWebhookEndpointRequest;

  try {
    const data = await api.testWebhookEndpoint(body);
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
| **endpoint** | `string` |  | [Defaults to `undefined`] |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Test event dispatched |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhookEndpoint

> GetWebhookEndpoint200Response updateWebhookEndpoint(webhookEndpoint, updateWebhookEndpointRequest)

Update a webhook endpoint

### Example

```ts
import {
  Configuration,
  WebhookEndpointsApi,
} from '';
import type { UpdateWebhookEndpointOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhookEndpointsApi(config);

  const body = {
    // string
    webhookEndpoint: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWebhookEndpointRequest (optional)
    updateWebhookEndpointRequest: ...,
  } satisfies UpdateWebhookEndpointOperationRequest;

  try {
    const data = await api.updateWebhookEndpoint(body);
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
| **webhookEndpoint** | `string` |  | [Defaults to `undefined`] |
| **updateWebhookEndpointRequest** | [UpdateWebhookEndpointRequest](UpdateWebhookEndpointRequest.md) |  | [Optional] |

### Return type

[**GetWebhookEndpoint200Response**](GetWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated webhook endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


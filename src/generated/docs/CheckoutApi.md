# CheckoutApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCheckoutSession**](CheckoutApi.md#createcheckoutsessionoperation) | **POST** /v1/checkout/sessions | Create a checkout session |
| [**getCheckoutSession**](CheckoutApi.md#getcheckoutsession) | **GET** /v1/checkout/sessions/{id} | Retrieve a checkout session |
| [**listCheckoutSessions**](CheckoutApi.md#listcheckoutsessions) | **GET** /v1/checkout/sessions | List checkout sessions |



## createCheckoutSession

> CreateCheckoutSession201Response createCheckoutSession(createCheckoutSessionRequest, idempotencyKey)

Create a checkout session

Creates a hosted checkout session and returns its payment URL.

### Example

```ts
import {
  Configuration,
  CheckoutApi,
} from '';
import type { CreateCheckoutSessionOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CheckoutApi(config);

  const body = {
    // CreateCheckoutSessionRequest
    createCheckoutSessionRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateCheckoutSessionOperationRequest;

  try {
    const data = await api.createCheckoutSession(body);
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
| **createCheckoutSessionRequest** | [CreateCheckoutSessionRequest](CreateCheckoutSessionRequest.md) |  | |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateCheckoutSession201Response**](CreateCheckoutSession201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Checkout session created |  -  |
| **422** | One or more request parameters were invalid. |  -  |
| **400** | Checkout error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCheckoutSession

> CreateCheckoutSession201Response getCheckoutSession(id)

Retrieve a checkout session

### Example

```ts
import {
  Configuration,
  CheckoutApi,
} from '';
import type { GetCheckoutSessionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CheckoutApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetCheckoutSessionRequest;

  try {
    const data = await api.getCheckoutSession(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateCheckoutSession201Response**](CreateCheckoutSession201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The checkout session |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCheckoutSessions

> ListCheckoutSessions200Response listCheckoutSessions(page)

List checkout sessions

### Example

```ts
import {
  Configuration,
  CheckoutApi,
} from '';
import type { ListCheckoutSessionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CheckoutApi(config);

  const body = {
    // number (optional)
    page: 56,
  } satisfies ListCheckoutSessionsRequest;

  try {
    const data = await api.listCheckoutSessions(body);
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

[**ListCheckoutSessions200Response**](ListCheckoutSessions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of checkout sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


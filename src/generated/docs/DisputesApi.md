# DisputesApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDispute**](DisputesApi.md#getdispute) | **GET** /v1/disputes/{id} | Retrieve a dispute |
| [**listDisputes**](DisputesApi.md#listdisputes) | **GET** /v1/disputes | List disputes |



## getDispute

> GetDispute200Response getDispute(id)

Retrieve a dispute

### Example

```ts
import {
  Configuration,
  DisputesApi,
} from '';
import type { GetDisputeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DisputesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetDisputeRequest;

  try {
    const data = await api.getDispute(body);
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

[**GetDispute200Response**](GetDispute200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The dispute |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listDisputes

> ListDisputes200Response listDisputes(status, perPage)

List disputes

### Example

```ts
import {
  Configuration,
  DisputesApi,
} from '';
import type { ListDisputesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DisputesApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // number (optional)
    perPage: 56,
  } satisfies ListDisputesRequest;

  try {
    const data = await api.listDisputes(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ListDisputes200Response**](ListDisputes200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of disputes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


# PayoutsApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPayout**](PayoutsApi.md#getpayout) | **GET** /v1/payouts/{id} | Retrieve a payout |
| [**listPayouts**](PayoutsApi.md#listpayouts) | **GET** /v1/payouts | List payouts |



## getPayout

> GetPayout200Response getPayout(id)

Retrieve a payout

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '';
import type { GetPayoutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayoutsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetPayoutRequest;

  try {
    const data = await api.getPayout(body);
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

[**GetPayout200Response**](GetPayout200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The payout |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPayouts

> ListPayouts200Response listPayouts(status, perPage)

List payouts

### Example

```ts
import {
  Configuration,
  PayoutsApi,
} from '';
import type { ListPayoutsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PayoutsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // number (optional)
    perPage: 56,
  } satisfies ListPayoutsRequest;

  try {
    const data = await api.listPayouts(body);
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

[**ListPayouts200Response**](ListPayouts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of payouts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


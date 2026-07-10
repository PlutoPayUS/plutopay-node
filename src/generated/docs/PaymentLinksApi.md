# PaymentLinksApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPaymentLink**](PaymentLinksApi.md#createpaymentlinkoperation) | **POST** /v1/payment-links | Create a payment link |
| [**deletePaymentLink**](PaymentLinksApi.md#deletepaymentlink) | **DELETE** /v1/payment-links/{payment_link} | Deactivate a payment link |
| [**getPaymentLink**](PaymentLinksApi.md#getpaymentlink) | **GET** /v1/payment-links/{payment_link} | Retrieve a payment link |
| [**listPaymentLinks**](PaymentLinksApi.md#listpaymentlinks) | **GET** /v1/payment-links | List payment links |



## createPaymentLink

> CreatePaymentLink201Response createPaymentLink(createPaymentLinkRequest, idempotencyKey)

Create a payment link

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '';
import type { CreatePaymentLinkOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // CreatePaymentLinkRequest
    createPaymentLinkRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreatePaymentLinkOperationRequest;

  try {
    const data = await api.createPaymentLink(body);
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
| **createPaymentLinkRequest** | [CreatePaymentLinkRequest](CreatePaymentLinkRequest.md) |  | |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreatePaymentLink201Response**](CreatePaymentLink201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Payment link created |  -  |
| **422** | One or more request parameters were invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePaymentLink

> CreatePaymentLink201Response deletePaymentLink(paymentLink)

Deactivate a payment link

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '';
import type { DeletePaymentLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // string
    paymentLink: paymentLink_example,
  } satisfies DeletePaymentLinkRequest;

  try {
    const data = await api.deletePaymentLink(body);
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
| **paymentLink** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreatePaymentLink201Response**](CreatePaymentLink201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deactivated |  -  |
| **400** | Cannot deactivate a completed payment link. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPaymentLink

> CreatePaymentLink201Response getPaymentLink(paymentLink)

Retrieve a payment link

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '';
import type { GetPaymentLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // string
    paymentLink: paymentLink_example,
  } satisfies GetPaymentLinkRequest;

  try {
    const data = await api.getPaymentLink(body);
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
| **paymentLink** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreatePaymentLink201Response**](CreatePaymentLink201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The payment link |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPaymentLinks

> ListPaymentLinks200Response listPaymentLinks(limit)

List payment links

### Example

```ts
import {
  Configuration,
  PaymentLinksApi,
} from '';
import type { ListPaymentLinksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentLinksApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies ListPaymentLinksRequest;

  try {
    const data = await api.listPaymentLinks(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ListPaymentLinks200Response**](ListPaymentLinks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of payment links |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


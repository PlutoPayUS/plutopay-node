# RefundsApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRefund**](RefundsApi.md#createrefundoperation) | **POST** /v1/transactions/{transaction}/refunds | Refund a transaction |



## createRefund

> CreatePaymentIntent201Response createRefund(transaction, idempotencyKey, createRefundRequest)

Refund a transaction

Refunds a captured payment (full or partial). The application fee is refunded and the connected-account transfer reversed proportionally. 

### Example

```ts
import {
  Configuration,
  RefundsApi,
} from '';
import type { CreateRefundOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RefundsApi(config);

  const body = {
    // string
    transaction: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
    // CreateRefundRequest (optional)
    createRefundRequest: ...,
  } satisfies CreateRefundOperationRequest;

  try {
    const data = await api.createRefund(body);
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
| **transaction** | `string` |  | [Defaults to `undefined`] |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |
| **createRefundRequest** | [CreateRefundRequest](CreateRefundRequest.md) |  | [Optional] |

### Return type

[**CreatePaymentIntent201Response**](CreatePaymentIntent201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refund applied; the updated transaction is returned. |  -  |
| **400** | Not refundable or amount exceeds refundable balance. |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


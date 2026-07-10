# TransactionsApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelTransaction**](TransactionsApi.md#canceltransaction) | **POST** /v1/transactions/{id}/cancel | Cancel an uncaptured payment |
| [**captureTransaction**](TransactionsApi.md#capturetransactionoperation) | **POST** /v1/transactions/{id}/capture | Capture a previously authorized payment |
| [**createPayment**](TransactionsApi.md#createpayment) | **POST** /v1/transactions | Create a payment |
| [**createPaymentIntent**](TransactionsApi.md#createpaymentintent) | **POST** /v1/payment-intents | Create a payment (alias of POST /v1/transactions) |
| [**getTransaction**](TransactionsApi.md#gettransaction) | **GET** /v1/transactions/{id} | Retrieve a transaction |
| [**listTransactions**](TransactionsApi.md#listtransactions) | **GET** /v1/transactions | List transactions |



## cancelTransaction

> CreatePaymentIntent201Response cancelTransaction(id, idempotencyKey)

Cancel an uncaptured payment

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { CancelTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string
    id: id_example,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CancelTransactionRequest;

  try {
    const data = await api.cancelTransaction(body);
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
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreatePaymentIntent201Response**](CreatePaymentIntent201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Canceled transaction |  -  |
| **400** | Cancel failed |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## captureTransaction

> CreatePaymentIntent201Response captureTransaction(id, idempotencyKey, captureTransactionRequest)

Capture a previously authorized payment

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { CaptureTransactionOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string
    id: id_example,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
    // CaptureTransactionRequest (optional)
    captureTransactionRequest: ...,
  } satisfies CaptureTransactionOperationRequest;

  try {
    const data = await api.captureTransaction(body);
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
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |
| **captureTransactionRequest** | [CaptureTransactionRequest](CaptureTransactionRequest.md) |  | [Optional] |

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
| **200** | Captured transaction |  -  |
| **400** | Capture failed |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPayment

> CreatePayment200Response createPayment(createTransactionRequest, idempotencyKey)

Create a payment

Creates a PaymentIntent-backed transaction. Also available at &#x60;POST /v1/payment-intents&#x60; (identical alias). Returns a &#x60;client_secret&#x60; for confirming with Stripe.js Elements / Payment Element. 

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { CreatePaymentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // CreateTransactionRequest
    createTransactionRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreatePaymentRequest;

  try {
    const data = await api.createPayment(body);
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
| **createTransactionRequest** | [CreateTransactionRequest](CreateTransactionRequest.md) |  | |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreatePayment200Response**](CreatePayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Transaction created |  * Idempotency-Key -  <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  |
| **200** | Idempotent replay — the original transaction is returned. |  -  |
| **422** | One or more request parameters were invalid. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **429** | Too many requests. |  * Retry-After -  <br>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPaymentIntent

> CreatePaymentIntent201Response createPaymentIntent(createTransactionRequest, idempotencyKey)

Create a payment (alias of POST /v1/transactions)

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { CreatePaymentIntentRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // CreateTransactionRequest
    createTransactionRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreatePaymentIntentRequest;

  try {
    const data = await api.createPaymentIntent(body);
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
| **createTransactionRequest** | [CreateTransactionRequest](CreateTransactionRequest.md) |  | |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

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
| **201** | Transaction created |  -  |
| **422** | One or more request parameters were invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransaction

> CreatePaymentIntent201Response getTransaction(id)

Retrieve a transaction

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { GetTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies GetTransactionRequest;

  try {
    const data = await api.getTransaction(body);
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

[**CreatePaymentIntent201Response**](CreatePaymentIntent201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The transaction |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTransactions

> ListTransactions200Response listTransactions(page, perPage, search, status, paymentMethodType, dateFrom, dateTo)

List transactions

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '';
import type { ListTransactionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TransactionsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    perPage: 56,
    // string | Match against reference, description, or receipt_email. (optional)
    search: search_example,
    // TransactionStatus (optional)
    status: ...,
    // string (optional)
    paymentMethodType: paymentMethodType_example,
    // Date (optional)
    dateFrom: 2013-10-20,
    // Date (optional)
    dateTo: 2013-10-20,
  } satisfies ListTransactionsRequest;

  try {
    const data = await api.listTransactions(body);
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
| **perPage** | `number` |  | [Optional] [Defaults to `20`] |
| **search** | `string` | Match against reference, description, or receipt_email. | [Optional] [Defaults to `undefined`] |
| **status** | `TransactionStatus` |  | [Optional] [Defaults to `undefined`] [Enum: pending, processing, succeeded, failed, canceled, refunded, partially_refunded, disputed] |
| **paymentMethodType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of transactions |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  |
| **401** | Missing or invalid API key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


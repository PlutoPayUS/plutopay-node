# TerminalApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTerminal**](TerminalApi.md#createterminaloperation) | **POST** /v1/terminals | Register a terminal |
| [**createTerminalConnectionToken**](TerminalApi.md#createterminalconnectiontoken) | **POST** /v1/terminal/connection-token | Create a Terminal connection token |
| [**createTerminalPayment**](TerminalApi.md#createterminalpaymentoperation) | **POST** /v1/terminal/create-payment | Create a Terminal PaymentIntent |
| [**deleteTerminal**](TerminalApi.md#deleteterminal) | **DELETE** /v1/terminals/{terminal} | Delete a terminal |
| [**getTerminal**](TerminalApi.md#getterminal) | **GET** /v1/terminals/{terminal} | Retrieve a terminal |
| [**listTerminalReaders**](TerminalApi.md#listterminalreaders) | **GET** /v1/terminal/readers | List Terminal readers |
| [**listTerminals**](TerminalApi.md#listterminals) | **GET** /v1/terminals | List terminals |
| [**processTerminalPayment**](TerminalApi.md#processterminalpaymentoperation) | **POST** /v1/terminal/process-payment | Process a payment on a reader |
| [**simulateTerminalPayment**](TerminalApi.md#simulateterminalpaymentoperation) | **POST** /v1/terminal/simulate-payment | Simulate a reader tap (test mode only) |
| [**updateTerminal**](TerminalApi.md#updateterminaloperation) | **PUT** /v1/terminals/{terminal} | Update a terminal |



## createTerminal

> CreateTerminal201Response createTerminal(createTerminalRequest)

Register a terminal

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { CreateTerminalOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // CreateTerminalRequest
    createTerminalRequest: ...,
  } satisfies CreateTerminalOperationRequest;

  try {
    const data = await api.createTerminal(body);
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
| **createTerminalRequest** | [CreateTerminalRequest](CreateTerminalRequest.md) |  | |

### Return type

[**CreateTerminal201Response**](CreateTerminal201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Terminal registered |  -  |
| **422** | One or more request parameters were invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTerminalConnectionToken

> CreateTerminalConnectionToken200Response createTerminalConnectionToken()

Create a Terminal connection token

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { CreateTerminalConnectionTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  try {
    const data = await api.createTerminalConnectionToken();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CreateTerminalConnectionToken200Response**](CreateTerminalConnectionToken200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection token for the Terminal SDK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTerminalPayment

> CreatePaymentIntent201Response createTerminalPayment(createTerminalPaymentRequest, idempotencyKey)

Create a Terminal PaymentIntent

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { CreateTerminalPaymentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // CreateTerminalPaymentRequest
    createTerminalPaymentRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateTerminalPaymentOperationRequest;

  try {
    const data = await api.createTerminalPayment(body);
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
| **createTerminalPaymentRequest** | [CreateTerminalPaymentRequest](CreateTerminalPaymentRequest.md) |  | |
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
| **201** | Terminal PaymentIntent created |  -  |
| **400** | Terminal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTerminal

> DeleteTerminal200Response deleteTerminal(terminal)

Delete a terminal

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { DeleteTerminalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // string
    terminal: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteTerminalRequest;

  try {
    const data = await api.deleteTerminal(body);
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
| **terminal** | `string` |  | [Defaults to `undefined`] |

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


## getTerminal

> CreateTerminal201Response getTerminal(terminal)

Retrieve a terminal

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { GetTerminalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // string
    terminal: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTerminalRequest;

  try {
    const data = await api.getTerminal(body);
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
| **terminal** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateTerminal201Response**](CreateTerminal201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The terminal |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTerminalReaders

> ListTerminalReaders200Response listTerminalReaders()

List Terminal readers

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { ListTerminalReadersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  try {
    const data = await api.listTerminalReaders();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListTerminalReaders200Response**](ListTerminalReaders200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Registered readers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listTerminals

> ListTerminals200Response listTerminals(page)

List terminals

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { ListTerminalsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // number (optional)
    page: 56,
  } satisfies ListTerminalsRequest;

  try {
    const data = await api.listTerminals(body);
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

[**ListTerminals200Response**](ListTerminals200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of terminals |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processTerminalPayment

> object processTerminalPayment(processTerminalPaymentRequest)

Process a payment on a reader

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { ProcessTerminalPaymentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // ProcessTerminalPaymentRequest
    processTerminalPaymentRequest: ...,
  } satisfies ProcessTerminalPaymentOperationRequest;

  try {
    const data = await api.processTerminalPayment(body);
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
| **processTerminalPaymentRequest** | [ProcessTerminalPaymentRequest](ProcessTerminalPaymentRequest.md) |  | |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Processing initiated on the reader |  -  |
| **400** | Terminal process error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## simulateTerminalPayment

> object simulateTerminalPayment(simulateTerminalPaymentRequest)

Simulate a reader tap (test mode only)

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { SimulateTerminalPaymentOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // SimulateTerminalPaymentRequest
    simulateTerminalPaymentRequest: ...,
  } satisfies SimulateTerminalPaymentOperationRequest;

  try {
    const data = await api.simulateTerminalPayment(body);
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
| **simulateTerminalPaymentRequest** | [SimulateTerminalPaymentRequest](SimulateTerminalPaymentRequest.md) |  | |

### Return type

**object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simulated tap dispatched |  -  |
| **400** | Simulation only available in test mode. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTerminal

> CreateTerminal201Response updateTerminal(terminal, updateTerminalRequest)

Update a terminal

### Example

```ts
import {
  Configuration,
  TerminalApi,
} from '';
import type { UpdateTerminalOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TerminalApi(config);

  const body = {
    // string
    terminal: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTerminalRequest (optional)
    updateTerminalRequest: ...,
  } satisfies UpdateTerminalOperationRequest;

  try {
    const data = await api.updateTerminal(body);
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
| **terminal** | `string` |  | [Defaults to `undefined`] |
| **updateTerminalRequest** | [UpdateTerminalRequest](UpdateTerminalRequest.md) |  | [Optional] |

### Return type

[**CreateTerminal201Response**](CreateTerminal201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated terminal |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


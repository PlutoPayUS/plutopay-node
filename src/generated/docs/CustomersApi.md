# CustomersApi

All URIs are relative to *https://plutopayus.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomer**](CustomersApi.md#createcustomer) | **POST** /v1/customers | Create a customer |
| [**deleteCustomer**](CustomersApi.md#deletecustomer) | **DELETE** /v1/customers/{customer} | Delete a customer |
| [**getCustomer**](CustomersApi.md#getcustomer) | **GET** /v1/customers/{customer} | Retrieve a customer |
| [**listCustomers**](CustomersApi.md#listcustomers) | **GET** /v1/customers | List customers |
| [**updateCustomer**](CustomersApi.md#updatecustomer) | **PUT** /v1/customers/{customer} | Update a customer |



## createCustomer

> CreateCustomer201Response createCustomer(customerWriteRequest, idempotencyKey)

Create a customer

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '';
import type { CreateCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // CustomerWriteRequest
    customerWriteRequest: ...,
    // string | Makes the POST safe to retry. Echoed back on the response. (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateCustomerRequest;

  try {
    const data = await api.createCustomer(body);
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
| **customerWriteRequest** | [CustomerWriteRequest](CustomerWriteRequest.md) |  | |
| **idempotencyKey** | `string` | Makes the POST safe to retry. Echoed back on the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CreateCustomer201Response**](CreateCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Customer created |  -  |
| **422** | One or more request parameters were invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomer

> DeleteTerminal200Response deleteCustomer(customer)

Delete a customer

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '';
import type { DeleteCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // string
    customer: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteCustomerRequest;

  try {
    const data = await api.deleteCustomer(body);
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
| **customer** | `string` |  | [Defaults to `undefined`] |

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


## getCustomer

> CreateCustomer201Response getCustomer(customer)

Retrieve a customer

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '';
import type { GetCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // string
    customer: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetCustomerRequest;

  try {
    const data = await api.getCustomer(body);
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
| **customer** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateCustomer201Response**](CreateCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The customer |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCustomers

> ListCustomers200Response listCustomers(page, size)

List customers

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '';
import type { ListCustomersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    size: 56,
  } satisfies ListCustomersRequest;

  try {
    const data = await api.listCustomers(body);
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
| **size** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**ListCustomers200Response**](ListCustomers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A paginated list of customers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomer

> CreateCustomer201Response updateCustomer(customer, customerWriteRequest)

Update a customer

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '';
import type { UpdateCustomerRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CustomersApi(config);

  const body = {
    // string
    customer: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CustomerWriteRequest (optional)
    customerWriteRequest: ...,
  } satisfies UpdateCustomerRequest;

  try {
    const data = await api.updateCustomer(body);
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
| **customer** | `string` |  | [Defaults to `undefined`] |
| **customerWriteRequest** | [CustomerWriteRequest](CustomerWriteRequest.md) |  | [Optional] |

### Return type

[**CreateCustomer201Response**](CreateCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated customer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


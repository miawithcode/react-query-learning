# React Query Learning

Learn how to communicate with the server.

<h2>Table Of Content</h2>

- [React Query Learning](#react-query-learning)
  - [HTTP Methods](#http-methods)
    - [GET](#get)
    - [POST](#post)
    - [PATCH](#patch)
    - [DELETE](#delete)
  - [API Documentation](#api-documentation)
  - [React Query](#react-query)
    - [Install](#install)
    - [Setup React Query](#setup-react-query)
    - [First Query](#first-query)
      - [Query Key](#query-key)
      - [Query Function](#query-function)
    - [Error Handling](#error-handling)

## HTTP Methods

HTTP (Hypertext Transfer Protocol) methods 定义了可在网络服务器上执行的获取、修改或删除信息的操作类型。最常用的 HTTP 方法是 GET、POST、PATCH 和 DELETE。

- GET 检索（retrieve） 数据
- POST 发送待处理数据
- PATCH 更新或替换现有数据
- DELETE 删除数据

这里用 axios 做示范，但是同样也能用 `fetch()`。

### GET

GET: 这个 HTTP 方法用于从服务器中检索数据。当客户端向服务器发送 GET 请求时，服务器将返回一个包含所请求数据的响应。这种方法通常用于从数据库检索信息、读取网页或下载文件。HTTP GET 方法是网络浏览器从服务器检索数据的**默认方法**，因为它是一种安全高效的资源请求方式。

```jsx
// HTTP GET example
try {
  const response = await axios.get('/api/data');
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

```jsx
// HTTP GET example
axios
  .get('/api/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### POST

POST: POST 方法用于向服务器发送数据，以创建或更新资源。当客户端向服务器发送 POST 请求时，服务器将处理该请求并创建新资源或更新现有资源。这种方法通常用于网络表单，用户输入信息后，这些信息会被发送到服务器进行处理。

```jsx
// HTTP POST example
try {
  const response = await axios.post('/api/data', { name: 'John', age: 30 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### PATCH

PATCH: PATCH 方法与 POST 方法类似，但它只用于更新资源的一部分。当客户端向服务器发送 PATCH 请求时，服务器将使用请求中提供的新数据更新资源。这种方法通常在 REST API 中用于更新资源的特定属性，相当于 Edit。

```jsx
// HTTP PATCH example
try {
  const response = await axios.patch('/api/data/1', { age: 31 });
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### DELETE

DELETE: DELETE 方法用于从服务器上删除资源。当客户端向服务器发送 DELETE 请求时，服务器将删除存在的资源。此方法通常用于 REST API，以删除不再需要的资源或撤销之前的操作。

```jsx
// HTTP DELETE example
try {
  const response = await axios.delete('/api/data/1');
  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

CRUD 代表 Create, Read, Update, and Delete（增删改查）, 是可以在数据库或网络应用程序上执行的基本操作。用户可以通过这些操作创建新数据、读取现有数据、更新数据，并在必要时删除数据。

## API Documentation

API 文档提供有关 API 的所有必要信息，使开发人员能够有效地集成和使用 API。

[API 文档示例](https://documenter.getpostman.com/view/18152321/2s93RTSDLn)

## React Query

> When working with server data, the biggest challenge is to keep your react app data, effectively react app state in sync with the server data. 在涉及服务器数据时，最大的挑战是让 react state 中的数据和服务器中的数据保持同步。

[React Query](https://tanstack.com/query/v4/docs/framework/react/overview) 是一种状态管理工具（state management library），可简化 React 应用程序中获取、缓存和更新数据的过程。它的主要优势包括自动后台重新获取、缓存和陈旧数据管理、错误处理以及轻松分页和无限滚动。与使用 useEffect 设置请求相比，React Query 为在 React 中管理数据提供了一种更具声明性和集中性的方法，从而使代码更简洁、更高效。它还减少了模板代码，并通过最大限度地减少不必要的重新呈现和网络请求来提高性能。

### Install

```sh
npm i @tanstack/react-query
```

### Setup React Query

在 `main.jsx` 中将整个应用程序用 `<QueryClientProvider>`  wrap 起来。

```jsx
// main.jsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

### First Query

```jsx
// Items.jsx

import { useQuery } from '@tanstack/react-query';

const result = useQuery({
  queryKey: ['tasks'],
  queryFn: () => customFetch.get('/'),
});
console.log(result);
```

#### Query Key

提供的唯一的将在内部使用的 key，以便在整个应用程序中重新获取、缓存和共享 queries。(The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.)

#### Query Function

query function 可以是任何返回 promise 的函数。返回的 promise 要么能解析数据，要么会出错。(A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.)

### Error Handling

> 在 React Query 的最新版本 (V5) 中， `isLoading` 属性用 `isPending` 属性替换了。这只是名上的变化，功能保持不变：如果查询尚未收到数据，则该属性为 true。

```jsx
const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/something');
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: '1rem ' }}>there was an error...</p>;
  // }
  if (error) {
    return <p style={{ marginTop: '1rem ' }}>{error.message}</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
```

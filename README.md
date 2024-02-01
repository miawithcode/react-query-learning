# React Query Learning

用 React Query 管理数据

## React Query

[React Query](https://tanstack.com/query/v4/docs/framework/react/overview) 是一种状态管理工具，可简化 React 应用程序中获取、缓存和更新数据的过程。它的主要优势包括自动后台重新获取、缓存和陈旧数据管理、错误处理以及轻松分页和无限滚动。与使用 useEffect 设置请求相比，React Query 为在 React 中管理数据提供了一种更具声明性和集中性的方法，从而使代码更简洁、更高效。它还减少了模板代码，并通过最大限度地减少不必要的重新呈现和网络请求来提高性能。

### Install

```sh
npm i @tanstack/react-query
```

### Setup React Query

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

- **Query Key** - The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application.
- **Query Function** - A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
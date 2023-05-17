import makeRequest from '../httpClient'

export const fetchTodos = () =>
  makeRequest({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/todos'
})

export const fetchDetailTodo = () => makeRequest({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/todos_detail'
})
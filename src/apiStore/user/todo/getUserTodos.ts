import { fetch_helper } from '@/helpers/request.helper';

export const getUserTodos = async ({ id }: { id?: string }) => {
  id = id ? id : '';
  const res = await fetch_helper({
    url: '/api/todo?id=' + id,
    method: 'GET'
  });
  // const res = await fetch('http://localhost:3000/api/todo');
  if (!res.ok) {
    return;
  }
  const todos = await res.json();
  return todos;
};

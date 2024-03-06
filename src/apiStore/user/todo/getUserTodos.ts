import { fetch_helper } from '@/helpers/reques.helper';

export const getUserTodos = async () => {
  const res = await fetch_helper({
    url: '/api/todo',
    method: 'GET'
  });
  // const res = await fetch('http://localhost:3000/api/todo');
  if (!res.ok) {
    return;
  }
  const todos = await res.json();
  return todos;
};

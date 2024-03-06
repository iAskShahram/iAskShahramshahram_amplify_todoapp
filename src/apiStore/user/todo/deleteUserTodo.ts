import { fetch_helper } from '@/helpers/request.helper';
import { v4 as uuidv4 } from 'uuid';

export const deleteUserTodo = async (id: string) => {
  if (!id) {
    return;
  }

  const res = await fetch_helper({
    url: `/api/todo/${id}`,
    method: 'DELETE'
  });
  // const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
  //   method: 'DELETE',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // });

  if (!res.ok) {
    return;
  }

  const todo = await res.json();
  return todo;
};

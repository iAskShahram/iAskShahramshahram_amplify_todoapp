import { v4 as uuidv4 } from 'uuid';
import { fetch_helper } from '@/helpers/reques.helper';

export const addUserTodo = async (todo: any) => {
  if (!todo) {
    return;
  }

  todo.id = uuidv4();

  const res = await fetch_helper({
    url: 'http://localhost:3000/api/todo',
    body: todo,
    method: 'POST'
  });

  // const res = await fetch('http://localhost:3000/api/todo', {
  //   method: 'POST',
  //   body: JSON.stringify(todo),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // });

  if (!res.ok) {
    return;
  }

  const todos = await res.json();
  return todos;
};

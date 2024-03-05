import { glClient } from '@/apiStore/graphqlClient';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { ErrorApiResponse, SuccessApiResponse } from '@/helpers/reques.helper';

async function addOne(todo: any) {
  return await glClient.graphql({
    query: mutations.createTodo,
    variables: {
      input: {
        id: todo.id,
        name: todo.name,
        description: todo.description
      }
    }
  });
}

async function getOne(id: string) {
  return await glClient.graphql({
    query: queries.getTodo,
    variables: { id }
  });
}

async function getAll() {
  return await glClient.graphql({
    query: queries.listTodos
  });
}

async function POST(req: Request) {
  try {
    // add a new todo
    const todo = await req.json();
    if (!todo) {
      return;
    }

    console.log({ todo });
    const resObject = await addOne(todo);

    return SuccessApiResponse(200, { todo: resObject }, 'Todos added');
  } catch (error) {
    console.dir({ error }, { depth: 5 });
    return ErrorApiResponse(500, {}, 'Something went wrong');
  }
}

async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    let todos = {};

    if (id) {
      todos = await getOne(id);
    } else {
      todos = await getAll();
      todos = todos?.data.listTodos.items;
    }

    if (!Array.isArray(todos)) {
      todos = [todos];
    }

    return SuccessApiResponse(200, { todos }, 'Todos fetched');
  } catch (error) {
    console.dir({ error }, { depth: 5 });
    return ErrorApiResponse(500, {}, 'Something went wrong');
  }
}

export { POST, GET };

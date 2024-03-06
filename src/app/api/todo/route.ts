import { glClient } from '@/apiStore/graphqlClient';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { ErrorApiResponse, SuccessApiResponse } from '@/helpers/request.helper';
import createError from 'http-errors';

async function addOne(todo: any) {
  return await glClient.graphql({
    query: mutations.createTodo,
    variables: {
      input: {
        id: todo.id,
        name: todo.name,
        description: todo.description,
        userId: todo.userId,
        image: todo.image
      }
    }
  });
}

export async function getOne({ id }: { id: string }) {
  return await glClient.graphql({
    query: queries.getTodo,
    variables: { id }
  });
}

async function getAll({ userId }: { userId: string }) {
  return await glClient.graphql({
    query: queries.listTodos,
    variables: {
      filter: {
        userId: {
          eq: userId
        }
      }
    }
  });
}

async function POST(req: Request) {
  const uId = req.headers.get('Authorization')?.split(' ')?.[1];

  try {
    // add a new todo
    const todo = await req.json();
    if (!todo) {
      return;
    }

    todo.userId = uId;
    const resObject = await addOne(todo);

    return SuccessApiResponse(200, { todo: resObject }, 'Todos added');
  } catch (error) {
    console.dir({ error }, { depth: 5 });
    return ErrorApiResponse(500, {}, 'Something went wrong');
  }
}

async function GET(req: Request) {
  const uId = req.headers.get('Authorization')?.split(' ')?.[1];

  // console.log({ uId });
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    let todos: any = {};

    if (id?.length) {
      todos = await getOne({ id });
      // if(todos?)
      console.log('fetchedSingle :: ', { todos });
    } else {
      todos = await getAll({ userId: String(uId) });
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

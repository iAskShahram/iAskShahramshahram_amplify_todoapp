import { ErrorApiResponse, SuccessApiResponse } from '@/helpers/request.helper';
import {
  addOne,
  getAll,
  getOne
} from '@/app/apiHelpers/user/todo/todo.user.helper';

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

export { GET, POST };

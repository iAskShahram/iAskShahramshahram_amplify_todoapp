import { ErrorApiResponse, SuccessApiResponse } from '@/helpers/request.helper';
import { glClient } from '@/apiStore/graphqlClient';
import * as mutations from '@/graphql/mutations';
import createHttpError from 'http-errors';
import { getOne } from '@/app/apiHelpers/user/todo/todo.user.helper';

async function deleteOne({ id, userId }: { userId: string; id: string }) {
  const todo = await getOne({ id });

  // validate if it is the same user's else throw error
  if (todo.data.getTodo?.userId != userId) {
    throw createHttpError.Unauthorized();
  }

  return await glClient.graphql({
    query: mutations.deleteTodo,
    variables: {
      input: {
        id
      }
    }
  });
}

async function DELETE(req: Request) {
  const uId: string = req.headers.get('Authorization')?.split(' ')?.[1]!;

  try {
    const splits = req.url?.split('todo/')!;
    const id = splits[splits.length - 1];

    if (!id) {
      return;
    }

    const resObject = await deleteOne({ userId: uId, id });

    return SuccessApiResponse(200, { todo: resObject }, 'Todos deleted');
  } catch (error) {
    console.dir({ error }, { depth: 5 });

    return ErrorApiResponse(500, {}, 'Something went wrong');
  }
}

export { DELETE };

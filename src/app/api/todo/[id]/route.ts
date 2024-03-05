import { ErrorApiResponse, SuccessApiResponse } from '@/helpers/reques.helper';
import { glClient } from '@/apiStore/graphqlClient';
import * as mutations from '@/graphql/mutations';

async function deleteOne(id: string) {
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
  try {
    const splits = req.url?.split('todo/')!;
    const id = splits[splits.length - 1];

    console.log({ id });
    if (!id) {
      return;
    }

    const resObject = await deleteOne(id);

    return SuccessApiResponse(
      200,
      { todo: resObject },
      'Todos deleted'
    );
  } catch (error) {
    console.dir({ error }, { depth: 5 });

    return ErrorApiResponse(500, {}, 'Something went wrong');
  }
}

export { DELETE };

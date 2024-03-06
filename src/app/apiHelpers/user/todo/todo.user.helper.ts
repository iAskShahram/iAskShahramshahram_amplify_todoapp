import { glClient } from '@/apiStore/graphqlClient';
import createHttpError from 'http-errors';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';

export async function addOne(todo: any) {
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

export async function getAll({ userId }: { userId: string }) {
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

export async function deleteOne({
  id,
  userId
}: {
  userId: string;
  id: string;
}) {
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

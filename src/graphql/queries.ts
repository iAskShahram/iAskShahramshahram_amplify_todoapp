/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodoCountByUserId = /* GraphQL */ `query GetTodoCountByUserId($userId: String!) {
  getTodoCountByUserId(userId: $userId) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTodoCountByUserIdQueryVariables,
  APITypes.GetTodoCountByUserIdQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    userId
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      userId
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getTodoCount = /* GraphQL */ `query GetTodoCount($id: ID!) {
  getTodoCount(id: $id) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTodoCountQueryVariables,
  APITypes.GetTodoCountQuery
>;
export const listTodoCounts = /* GraphQL */ `query ListTodoCounts(
  $filter: ModelTodoCountFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodoCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      count
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodoCountsQueryVariables,
  APITypes.ListTodoCountsQuery
>;

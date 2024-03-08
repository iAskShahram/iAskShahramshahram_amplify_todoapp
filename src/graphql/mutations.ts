/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createTodoCount = /* GraphQL */ `mutation CreateTodoCount(
  $input: CreateTodoCountInput!
  $condition: ModelTodoCountConditionInput
) {
  createTodoCount(input: $input, condition: $condition) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoCountMutationVariables,
  APITypes.CreateTodoCountMutation
>;
export const updateTodoCount = /* GraphQL */ `mutation UpdateTodoCount(
  $input: UpdateTodoCountInput!
  $condition: ModelTodoCountConditionInput
) {
  updateTodoCount(input: $input, condition: $condition) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoCountMutationVariables,
  APITypes.UpdateTodoCountMutation
>;
export const deleteTodoCount = /* GraphQL */ `mutation DeleteTodoCount(
  $input: DeleteTodoCountInput!
  $condition: ModelTodoCountConditionInput
) {
  deleteTodoCount(input: $input, condition: $condition) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoCountMutationVariables,
  APITypes.DeleteTodoCountMutation
>;

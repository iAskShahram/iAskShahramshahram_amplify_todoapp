/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateTodoCount = /* GraphQL */ `subscription OnCreateTodoCount($filter: ModelSubscriptionTodoCountFilterInput) {
  onCreateTodoCount(filter: $filter) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoCountSubscriptionVariables,
  APITypes.OnCreateTodoCountSubscription
>;
export const onUpdateTodoCount = /* GraphQL */ `subscription OnUpdateTodoCount($filter: ModelSubscriptionTodoCountFilterInput) {
  onUpdateTodoCount(filter: $filter) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoCountSubscriptionVariables,
  APITypes.OnUpdateTodoCountSubscription
>;
export const onDeleteTodoCount = /* GraphQL */ `subscription OnDeleteTodoCount($filter: ModelSubscriptionTodoCountFilterInput) {
  onDeleteTodoCount(filter: $filter) {
    id
    userId
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoCountSubscriptionVariables,
  APITypes.OnDeleteTodoCountSubscription
>;

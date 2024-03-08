/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  userId: string,
  image: string,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  userId: string,
  image: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  userId?: string | null,
  image?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateTodoCountInput = {
  id?: string | null,
  userId: string,
  count: number,
};

export type ModelTodoCountConditionInput = {
  userId?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelTodoCountConditionInput | null > | null,
  or?: Array< ModelTodoCountConditionInput | null > | null,
  not?: ModelTodoCountConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type TodoCount = {
  __typename: "TodoCount",
  id: string,
  userId: string,
  count: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoCountInput = {
  id: string,
  userId?: string | null,
  count?: number | null,
};

export type DeleteTodoCountInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelTodoCountFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelTodoCountFilterInput | null > | null,
  or?: Array< ModelTodoCountFilterInput | null > | null,
  not?: ModelTodoCountFilterInput | null,
};

export type ModelTodoCountConnection = {
  __typename: "ModelTodoCountConnection",
  items:  Array<TodoCount | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodoCountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  count?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTodoCountFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoCountFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoCountMutationVariables = {
  input: CreateTodoCountInput,
  condition?: ModelTodoCountConditionInput | null,
};

export type CreateTodoCountMutation = {
  createTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoCountMutationVariables = {
  input: UpdateTodoCountInput,
  condition?: ModelTodoCountConditionInput | null,
};

export type UpdateTodoCountMutation = {
  updateTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoCountMutationVariables = {
  input: DeleteTodoCountInput,
  condition?: ModelTodoCountConditionInput | null,
};

export type DeleteTodoCountMutation = {
  deleteTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoCountByUserIdQueryVariables = {
  userId: string,
};

export type GetTodoCountByUserIdQuery = {
  getTodoCountByUserId?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      userId: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoCountQueryVariables = {
  id: string,
};

export type GetTodoCountQuery = {
  getTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodoCountsQueryVariables = {
  filter?: ModelTodoCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoCountsQuery = {
  listTodoCounts?:  {
    __typename: "ModelTodoCountConnection",
    items:  Array< {
      __typename: "TodoCount",
      id: string,
      userId: string,
      count: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    userId: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoCountSubscriptionVariables = {
  filter?: ModelSubscriptionTodoCountFilterInput | null,
};

export type OnCreateTodoCountSubscription = {
  onCreateTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoCountSubscriptionVariables = {
  filter?: ModelSubscriptionTodoCountFilterInput | null,
};

export type OnUpdateTodoCountSubscription = {
  onUpdateTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoCountSubscriptionVariables = {
  filter?: ModelSubscriptionTodoCountFilterInput | null,
};

export type OnDeleteTodoCountSubscription = {
  onDeleteTodoCount?:  {
    __typename: "TodoCount",
    id: string,
    userId: string,
    count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

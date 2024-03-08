/* Amplify Params - DO NOT EDIT
	API_SHAHRAMTODO_GRAPHQLAPIENDPOINTOUTPUT
	API_SHAHRAMTODO_GRAPHQLAPIIDOUTPUT
	API_SHAHRAMTODO_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import axios from 'axios';

const fetch_helper = ({ url, body, method, key }) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': key
  };

  return axios({
    method,
    url,
    headers,
    data: body
  });
};

// get the todocount object based on userId
// const GetTodoCountByUserIdQuery = /* GraphQL */ `
//   query GetTodoCountByUserId($userId: String!) {
//     getTodoCountByUserId(userId: $userId) {
//       id
//       userId
//       count
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
const GetTodoCountByUserIdQuery = /* GraphQL */ `
  query ListTodoCounts(
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
`;

const createTodoCountMutation = /* GraphQL */ `
  mutation CreateTodoCount(
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
`;

const updateTodoCountMutation = /* GraphQL */ `
  mutation UpdateTodoCount(
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
`;

export const handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const GQL_API_ENDPOINT = process.env.API_SHAHRAMTODO_GRAPHQLAPIENDPOINTOUTPUT;
  const GQL_API_KEY = process.env.API_SHAHRAMTODO_GRAPHQLAPIKEYOUTPUT;
  const GQL_API_ID = process.env.API_SHAHRAMTODO_GRAPHQLAPIIDOUTPUT;
  const REMOVE = 'REMOVE';
  const INSERT = 'INSERT';

  const eventName = event.Records[0].eventName;
  const userId =
    eventName === REMOVE
      ? event.Records[0].dynamodb.OldImage.userId.S
      : eventName === INSERT
      ? event.Records[0].dynamodb.NewImage.userId.S
      : '';

  if (!userId.length) {
    return Promise.resolve(
      `Skipped for PUT & DELETE eventName: ${eventName}.  userId: ${userId}`
    );
  }

  const todoCountObj = {};
  let errObj = {};
  try {
    todoCountObj.data = await fetch_helper({
      url: GQL_API_ENDPOINT,
      method: 'POST',
      body: {
        query: GetTodoCountByUserIdQuery,
        variables: {
          userId
        }
      },
      key: GQL_API_KEY
    });
    todoCountObj.data = todoCountObj.data.data.data.listTodoCounts.items;
  } catch (err) {
    errObj = err;
  }

  if (JSON.stringify(errObj) != '{}') {
    return Promise.resolve('Something Went Wrong', errObj);
  }

  const userTodoCountObj = todoCountObj?.data.filter(
    (todoCount) => todoCount.userId === userId
  );

  if (!userTodoCountObj?.length) {
    // create one and set the count to 1
    try {
      const res = await fetch_helper({
        url: GQL_API_ENDPOINT,
        method: 'POST',
        body: {
          query: createTodoCountMutation,
          variables: {
            input: {
              count: 1,
              userId
            }
          }
        },
        key: GQL_API_KEY
      });

      if (res.data.errors?.length) {
        return Promise.resolve(
          'Error creating todo.  ::  ',
          res.data.errors[0]
        );
      }

      console.log('Created: ', { res: res.data.data.createTodoCount });
      return Promise.resolve(res.data.data.createTodoCount);
    } catch (err) {
      console.log({ err });
    }
  } else {
    // update the previous todo.
    const updatedCount =
      eventName === REMOVE
        ? parseInt(userTodoCountObj[0].count) - 1
        : parseInt(userTodoCountObj[0].count) + 1;

    try {
      const res = await fetch_helper({
        url: GQL_API_ENDPOINT,
        method: 'POST',
        body: {
          query: updateTodoCountMutation,
          variables: {
            input: {
              id: userTodoCountObj[0].id,
              count: updatedCount,
              userId
            }
          }
        },
        key: GQL_API_KEY
      });
      if (res.data.errors?.length) {
        return Promise.resolve(
          'Error updating todo.  ::  ',
          res.data.errors[0]
        );
      }

      console.log('Updated: ', { res: res.data.data.updateTodoCount });
      return Promise.resolve(res.data.data.updateTodoCount);
    } catch (err) {
      console.log('Error updating count', err);
    }
  }

  return Promise.resolve('Khin se phat gya');
};

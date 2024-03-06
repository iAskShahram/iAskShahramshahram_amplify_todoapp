import { NextResponse } from 'next/server';

export const SuccessApiResponse = (
  statusCode: number,
  resObject: any,
  message: string
) => {
  return NextResponse.json(
    {
      statusCode: statusCode || 200,
      data: resObject || [],
      message: message || 'Success'
    },
    {
      status: statusCode || 200
    }
  );
};

export const ErrorApiResponse = (
  statusCode: number | undefined,
  resObject: any | undefined,
  message: string | undefined
) => {
  return NextResponse.json(
    {
      statusCode: statusCode || 500,
      data: resObject || {},
      message: message || 'Something went wrong'
    },
    {
      status: statusCode || 500
    }
  );
};

// class Fetch {

// }

export const fetch_helper = ({
  url,
  body,
  method
}: {
  url: string;
  body?: any | null;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
}): Promise<Response> => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')!)?.userId
  };

  if (method in ['GET', 'DELETE']) {
    return fetch(process.env.NEXT_PUBLIC_SERVER_URL + url, {
      headers
    });
  }
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers
  });

  // return fetch(url, {
  //   method,
  //   body: JSON.stringify(body),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authentication: `Bearer ${
  //       JSON.parse(localStorage.getItem('user') || '')?.userId
  //     }`
  //   }
  // });
};

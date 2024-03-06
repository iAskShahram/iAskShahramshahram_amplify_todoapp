'use client';

import { Box, Button, ImageList, ImageListItem } from '@mui/material';
import { getUserTodos, deleteUserTodo } from '@/apiStore/user/todo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useUser } from '@/context/UserContext';

function ListAllTodos({
  rr,
  setRr
}: {
  rr: boolean;
  setRr: Dispatch<SetStateAction<boolean>>;
}) {
  const [todos, setTodos] = useState([]);
  const { user_c } = useUser();

  useEffect(() => {
    fetchTodos();
  }, []);
  useEffect(() => {
    if (rr) {
      fetchTodos();
      setRr(false);
    }
  });

  const fetchTodos = async () => {
    toast.loading('loading ...');

    try {
      const todos = await getUserTodos({});
      setTodos(todos?.data?.todos);
    } catch (err) {
      toast.error('Failed to fetch todos.');
    } finally {
      toast.dismiss();
    }
  };

  const handleDelete = async (id: string) => {
    if (!id?.length) return;
    toast.loading('loading ...');

    try {
      const res = await deleteUserTodo(id);
      toast.success(res.message);
      fetchTodos();
    } catch (err) {
      toast.error('Failed to delete.');
    } finally {
      toast.dismiss();
    }
  };

  return (
    <Box>
      <h1>User's Added todos (count: {todos?.length || 0})</h1>
      {todos &&
        todos?.map((todo: any, i: number) => (
          <>
            <Box
              key={i}
              sx={{
                border: '1px solid black',
                p: 2,
                display: 'flex',
                flexDirection: 'row'
              }}>
              <Box>
                name: {todo?.name} <br />
                description: {todo?.description} <br />
                userId: {todo?.userId}
                <ImageList
                  sx={{ width: 100, height: 100 }}
                  cols={1}
                  rowHeight={164}>
                  <ImageListItem>
                    <img
                      src={`${process.env.NEXT_PUBLIC_aws_bucket_prefix}${todo?.image}`}
                      alt={`item.alt`}
                      loading='lazy'
                    />
                  </ImageListItem>
                </ImageList>
              </Box>
              <Box
                sx={{
                  float: 'right'
                }}>
                <Button type='button' onClick={() => handleDelete(todo?.id)}>
                  delete
                </Button>
              </Box>
              <br />
            </Box>
          </>
        ))}
    </Box>
  );
}

export default ListAllTodos;

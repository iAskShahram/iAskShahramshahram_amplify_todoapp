'use client';

import { Box, Button } from '@mui/material';

import { getUserTodos, deleteUserTodo } from '@/apiStore/user/todo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'sonner';

function ListAllTodos({
  rr,
  setRr
}: {
  rr: boolean;
  setRr: Dispatch<SetStateAction<boolean>>;
}) {
  const [todos, setTodos] = useState([]);

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
    const todos = await getUserTodos();
    setTodos(todos.data.todos);
  };

  const handleDelete = async (id: string) => {
    if (!id?.length) return;

    try {
      const res = await deleteUserTodo(id);
      toast.success(res.message);
      fetchTodos();
    } catch (err) {
      toast.error('Failed to delete.');
      console.log({ err });
    }
  };

  return (
    <Box>
      <h1>User's Added todos (count: {todos.length || 0})</h1>
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
                description: {todo?.description}
              </Box>
              <Box
                sx={{
                  float: 'right'
                }}>
                <Button type='button' onClick={() => handleDelete(todo?.id)}>
                  delete
                </Button>
              </Box>
            </Box>
            <br />
          </>
        ))}
    </Box>
  );
}

export default ListAllTodos;

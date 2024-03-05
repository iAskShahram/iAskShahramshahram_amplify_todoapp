'use client';

import { CreateTodoInput } from '@/API';
import { addUserTodo } from '@/apiStore/user/todo/addUserTodo';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';

const AddNewTodo = ({
  setRr
}: {
  setRr: Dispatch<SetStateAction<boolean>>;
}) => {
  const [todo, setTodo] = useState<CreateTodoInput>({
    name: '',
    description: ''
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setTodo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const addedTodo = await addUserTodo(todo);

      setTodo({
        name: '',
        description: ''
      });
      setRr(true);
      toast.success(addedTodo.message || 'Success');
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        border: '1px solid black',
        p: '16px'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
        <TextField
          label='Name'
          variant='outlined'
          value={todo.name}
          name='name'
          type='text'
          onChange={handleChange}
        />
        <TextField
          label='Description'
          variant='outlined'
          value={todo.description}
          name='description'
          type='text'
          onChange={handleChange}
          multiline
        />
      </Box>

      <Box>
        <Button variant='outlined' type='button' onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewTodo;

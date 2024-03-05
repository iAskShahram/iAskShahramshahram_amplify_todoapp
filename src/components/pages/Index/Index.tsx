'use client';

import { Box } from '@mui/material';
import AddNewTodo from '@/components/todo/AddNewTodo';
import ListAllTodos from '@/components/todo/ListAllTodos';
import { useState } from 'react';



const Index = () => {
  const [rr, setRr] = useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
      <Box>
        <AddNewTodo setRr={setRr} />
      </Box>
      <Box>
        <ListAllTodos rr={rr} setRr={setRr} />
      </Box>
    </Box>
  );
};

export default Index;

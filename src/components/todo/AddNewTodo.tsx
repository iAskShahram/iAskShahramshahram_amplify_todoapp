'use client';

import { CreateTodoInput } from '@/API';
import { addUserTodo } from '@/apiStore/user/todo/addUserTodo';
import {
  Button,
  ImageList,
  ImageListItem,
  Input,
  TextField
} from '@mui/material';
import Box from '@mui/material/Box';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'sonner';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@/context/UserContext';

const AddNewTodo = ({
  setRr
}: {
  setRr: Dispatch<SetStateAction<boolean>>;
}) => {
  const [todo, setTodo] = useState<CreateTodoInput>({
    name: '',
    description: '',
    userId: '',
    image: ''
  });
  const [imagePath, setImagePath] = useState<any>('');
  const [previewPath, setPreviewPath] = useState('');

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
      if (!imagePath?.name) {
        toast.info('Uplaod an image');
        return;
      }
      if (!todo.name || !todo.description) {
        toast.info('Some missing feilds are required');
        return;
      }

      const extLen = imagePath.name.split('.');
      const ext = extLen[extLen.length - 1];
      if (!['png', 'jpeg', 'jpg'].includes(ext)) {
        toast.info('Only images are allowed');
        toast.dismiss();
        return;
      }

      toast.loading('Loading ...');
      const result = await uploadData({
        key: uuidv4() + '.' + ext,
        data: imagePath
      }).result;

      const _todo = {
        ...todo,
        image: result.key
      };

      const addedTodo = await addUserTodo(_todo);

      setTodo({
        name: '',
        description: '',
        userId: '',
        image: ''
      });
      setRr(true);
      toast.success(addedTodo?.message || 'Success');
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.message || 'Something went wrong');
    } finally {
      toast.dismiss();
    }
  };

  const handleImgChange = (e: any) => {
    setImagePath(e.target.files[0]);
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
        <Input type='file' onChange={handleImgChange} />
      </Box>

      <Box>
        <Button variant='outlined' type='button' onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {/* <ImageList sx={{ width: 100, height: 100 }} cols={1} rowHeight={164}>
        <ImageListItem>
          <img
            // srcSet={`${pImgP}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={previewPath}
            alt={`item.alt`}
            loading='lazy'
          />
        </ImageListItem>
      </ImageList> */}
    </Box>
  );
};

export default AddNewTodo;

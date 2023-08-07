import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { categories } from '../moks';
import { grey } from '@mui/material/colors';
import uuid from 'react-uuid';
import { useAppDispatch } from '../hooks';

const NoteForm: FC<{
  title: string;
  category: string;
  name: string;
  content: string;
  handleClose: () => void;
}> = ({ title, category, name, content, handleClose }): JSX.Element => {
  // const handleSubmit = (e: Sub)
  // const dispatch = useAppDispatch();

  return (
    <>
      <FormControl variant='standard'>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label='Category'
          // required
          // onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <MenuItem key={uuid()} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant='standard'
        label='Name'
        value={name}
        // required
        // onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <TextField
        variant='standard'
        label='Content'
        value={content}
        // required
        // onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //   setContent(e.target.value)
        // }
      />
      <Button
        type='submit'
        variant='outlined'
        color='inherit'
        sx={{
          textTransform: 'none',
          alignSelf: 'end',
          bgcolor: grey[200],
          width: 200,
        }}
        onClick={handleClose}
      >
        <Typography variant='h5'>{title}</Typography>
      </Button>
    </>
  );
};

export default NoteForm;

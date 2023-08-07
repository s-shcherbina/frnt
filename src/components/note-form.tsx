import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { categories } from '../common/moks';
import { grey } from '@mui/material/colors';
import uuid from 'react-uuid';
import { useAppDispatch } from '../utils/hooks';
import { INote, addNote, editNote } from '../store/slice/notes';

const NoteForm: FC<{
  note: INote | null;
  handleClose: () => void;
}> = ({ note, handleClose }): JSX.Element => {
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState(note ? note.category : '');
  const [name, setName] = useState(note ? note.name : '');
  const [content, setContent] = useState(note ? note.content : '');

  const handleSubmitNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      note
        ? editNote({ id: note.id, category, name, content, date: note.date })
        : addNote({ category, name, content })
    );
  };

  return (
    <form onSubmit={handleSubmitNote}>
      <Stack spacing={3}>
        <FormControl variant='standard'>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label='Category'
            sx={{ fontSize: 24 }}
            onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
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
          inputProps={{ style: { fontSize: 24 } }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <TextField
          variant='standard'
          label='Content'
          value={content}
          inputProps={{ style: { fontSize: 24 } }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
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
          <Typography variant='h5'>
            {note ? 'Edit Note' : 'Create Note'}
          </Typography>
        </Button>
      </Stack>
    </form>
  );
};

export default NoteForm;

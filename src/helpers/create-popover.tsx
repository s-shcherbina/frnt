import { Close, Edit } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from 'react';
import { categories } from '../moks';
import uuid from 'react-uuid';
import { useAppDispatch } from '../hooks';
import { addNote, editNote } from '../store/slice/notes';

const CreatePopover: FC<{
  title: string;
  editCategory: string;
  editName: string;
  editContent: string;
  // id: string;
}> = ({ title, editCategory, editName, editContent }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const dispatch = useAppDispatch();

  const [category, setCategory] = useState(editCategory);
  const [name, setName] = useState(editName);
  const [content, setContent] = useState(editContent);
  // const [create, setCreate] = useState(true);

  // console.log(category, name, content);

  return (
    <>
      {title === 'Create Note' ? (
        <Button
          variant='outlined'
          color='inherit'
          sx={{
            textTransform: 'none',
            alignSelf: 'end',
            mt: 2,
            bgcolor: grey[200],
            px: 4,
          }}
          onClick={(e) => {
            handleClick(e);
            setCategory('');
            setName('');
            setContent('');
            // setCreate(true);
          }}
        >
          <Typography variant='h5'>{title}</Typography>
        </Button>
      ) : (
        <IconButton
          sx={{ mr: -2 }}
          onClick={(e) => {
            handleClick(e);
            // setCreate(false);
          }}
        >
          <Edit fontSize='large' />
        </IconButton>
      )}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* <form onSubmit={handleSubmit}> */}
        <Stack
          spacing={3}
          sx={{ width: { xs: 300, sm: 450, lg: 600 }, p: { xs: 0.5, sm: 3 } }}
        >
          <IconButton sx={{ alignSelf: 'end', mb: -4 }} onClick={handleClose}>
            <Close />
          </IconButton>
          <Typography variant='h4' sx={{ alignSelf: 'center' }}>
            {title}
          </Typography>
          <FormControl variant='standard'>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label='Category'
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            variant='standard'
            label='Content'
            value={content}
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
              px: 4,
            }}
            onClick={handleClose}
          >
            <Typography variant='h5'>{title}</Typography>
          </Button>
        </Stack>
        {/* </form> */}
      </Popover>
    </>
  );
};

export default CreatePopover;

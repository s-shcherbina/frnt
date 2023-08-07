import { Close, Edit } from '@mui/icons-material';
import { Button, IconButton, Popover, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC, MouseEvent, useState, FormEvent } from 'react';
import { useAppDispatch } from '../hooks';
import { addNote, editNote } from '../store/slice/notes';
import NoteForm from './note-form';

const FormPopover: FC<{
  title: string;
  editCategory: string;
  editName: string;
  editContent: string;
  // id: string;
}> = ({ title, editCategory, editName, editContent }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [category, setCategory] = useState(editCategory);
  const [name, setName] = useState(editName);
  const [content, setContent] = useState(editContent);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
            width: 200,
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
          <NoteForm
            title={title}
            category={category}
            name={name}
            content={content}
            handleClose={handleClose}
          />
        </Stack>
        {/* </form> */}
      </Popover>
    </>
  );
};

export default FormPopover;

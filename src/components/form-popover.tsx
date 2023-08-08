import { Close, Edit } from '@mui/icons-material';
import { Button, IconButton, Popover, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC, MouseEvent, useState } from 'react';
import NoteForm from './note-form';
import { IFormPopoverProps } from '../types';

const FormPopover: FC<IFormPopoverProps> = ({ note }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {note ? (
        <IconButton sx={{ mr: -2 }} onClick={(e) => handleClick(e)}>
          <Edit fontSize='large' />
        </IconButton>
      ) : (
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
          onClick={(e) => handleClick(e)}
        >
          <Typography variant='h5'>Create Note</Typography>
        </Button>
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
        <Stack
          sx={{ width: { xs: 300, sm: 450, lg: 600 }, p: { xs: 0.5, sm: 3 } }}
        >
          <IconButton sx={{ alignSelf: 'end' }} onClick={handleClose}>
            <Close />
          </IconButton>
          <Typography variant='h4' sx={{ alignSelf: 'center' }}>
            {note ? 'Edit Note' : 'Create Note'}
          </Typography>
          <NoteForm note={note} handleClose={handleClose} />
        </Stack>
      </Popover>
    </>
  );
};

export default FormPopover;

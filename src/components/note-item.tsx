import { FC } from 'react';
import { INote, removeNote, toggleArchived } from '../store/slice/notes';
import TableComponent from './table-component';
import { Grid, IconButton } from '@mui/material';
import { Archive, Delete, Unarchive } from '@mui/icons-material';
import { indigo } from '@mui/material/colors';
import uuid from 'react-uuid';
import FormPopover from '../helpers/form-popover';
import { useAppDispatch } from '../hooks';

const NoteItem: FC<INote> = (note): JSX.Element => {
  // console.log(Object.values(note));
  const dispatch = useAppDispatch();

  return (
    <Grid
      key={uuid()}
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: indigo[50],
        py: 1,
        mt: 2,
      }}
    >
      <TableComponent
        category={note.category}
        name={note.name}
        gridName={2.2}
        data={[...Object.values(note).slice(2, -1)]}
        gridData={1.9}
      />
      <Grid item xs={1.3} sx={{ display: 'flex', justifyContent: 'end' }}>
        <FormPopover
          title={'Edit Note'}
          editCategory={note.category}
          editName={note.name}
          editContent={note.content}
        />
        <IconButton
          sx={{ mr: -2 }}
          onClick={() => dispatch(toggleArchived(note.id))}
        >
          {note.archived ? (
            <Unarchive fontSize='large' />
          ) : (
            <Archive fontSize='large' />
          )}
        </IconButton>
        <IconButton onClick={() => dispatch(removeNote(note.id))}>
          <Delete fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoteItem;

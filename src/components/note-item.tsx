import { FC } from 'react';
import { INote } from '../store/slice/notes';
import TableComponent from './table-component';
import { Grid, IconButton } from '@mui/material';
import CreatePopover from '../helpers/create-popover';
import { Archive, Delete } from '@mui/icons-material';
import { indigo } from '@mui/material/colors';
import uuid from 'react-uuid';

const NoteItem: FC<INote> = (note): JSX.Element => {
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
        data={[
          ...Object.values(note).slice(2, -2),
          note.dates.next + note.dates.next,
        ]}
        gridData={1.9}
      />
      <Grid item xs={1.3} sx={{ display: 'flex', justifyContent: 'end' }}>
        <CreatePopover
          title={'Edit Note'}
          editCategory={note.category}
          editName={note.name}
          editContent={note.content}
        />
        <IconButton sx={{ mr: -2 }}>
          <Archive fontSize='large' />
        </IconButton>
        <IconButton>
          <Delete fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NoteItem;

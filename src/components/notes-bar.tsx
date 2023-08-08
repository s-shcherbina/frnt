import { Archive, Delete, Unarchive } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import { notesBar } from '../common/moks';
import { removeNotes, toggleArchivedAll } from '../store/slice/notes';
import { useDispatch } from 'react-redux';
import TableComponent from './table-component';
import { INotesListProps } from '../types';

const NotesBar: FC<INotesListProps> = ({ archived }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        bgcolor: grey[500],
        color: '#fff',
        borderRadius: 1.5,
        fontWeight: 'bold',
        py: 0.5,
      }}
    >
      <TableComponent
        category={''}
        gridName={2.2}
        data={notesBar}
        gridData={1.9}
      />

      <Grid
        item
        xs={12}
        md={1.3}
        sx={{ display: 'flex', justifyContent: { xs: 'start', md: 'end' } }}
      >
        <IconButton
          sx={{ color: 'white', mr: -2 }}
          onClick={() => dispatch(toggleArchivedAll(archived))}
        >
          {archived ? (
            <Unarchive fontSize='large' />
          ) : (
            <Archive fontSize='large' />
          )}
        </IconButton>
        <IconButton
          sx={{ color: 'white' }}
          onClick={() => dispatch(removeNotes(archived))}
        >
          <Delete fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotesBar;

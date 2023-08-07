import { Archive, Delete, Unarchive } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';
import { notesBar } from '../moks';
import { removeNotes, toggleArchivedAll } from '../store/slice/notes';
import { useDispatch } from 'react-redux';
import TableComponent from './table-component';

const NotesBar: FC<{ archived: boolean }> = ({ archived }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: grey[500],
        color: 'white',
        borderRadius: 1.5,
        fontWeight: 'bold',
        py: 0.5,
      }}
    >
      <TableComponent
        category={''}
        name={'Name'}
        gridName={2.2}
        data={notesBar}
        gridData={1.9}
      />
      {/* <Grid item xs={0.9}></Grid>
      <Grid item xs={2.2}>
        <Typography variant='h5' sx={{ fontWeight: 800 }}>
          Name
        </Typography>
      </Grid>
      {notesBar.map((item) => (
        <Grid key={item} item xs={1.9}>
          <Typography variant='h5' sx={{ fontWeight: 800 }}>
            {item}
          </Typography>
        </Grid>
      ))} */}
      <Grid item xs={1.3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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

import { Archive, Delete } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';

const NotesBar: FC = (): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: grey[500],
        color: 'white',
        borderRadius: 1.5,
        py: 0.5,
      }}
    >
      <Grid item xs={0.9}></Grid>
      <Grid item xs={2.2}>
        <Typography variant='h5' sx={{ fontWeight: 800 }}>
          Name
        </Typography>
      </Grid>
      {['Created', 'Category', 'Content', 'Dates'].map((item) => (
        <Grid key={item} item xs={1.9}>
          <Typography variant='h5' sx={{ fontWeight: 800 }}>
            {item}
          </Typography>
        </Grid>
      ))}
      <Grid item xs={1.3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton sx={{ color: 'white', mr: -2 }}>
          <Archive fontSize='large' />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <Delete fontSize='large' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotesBar;

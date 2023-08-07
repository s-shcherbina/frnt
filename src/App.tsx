import { FC, useState } from 'react';
import NoteList from './components/note-list';
import { Button, Stack, Typography } from '@mui/material';
import SummaryList from './components/summary-list';
import FormPopover from './components/form-popover';
import { grey } from '@mui/material/colors';
import { useExistArchived, useExistNotes } from './utils/hooks';

const App: FC = (): JSX.Element => {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <Stack sx={{ px: { xs: 0.2, lg: 5 } }}>
      <NoteList archived={false} />
      <FormPopover note={null} />

      {useExistNotes() && <SummaryList />}
      {useExistArchived() && (
        <Button
          variant='outlined'
          color='inherit'
          sx={{
            textTransform: 'none',
            alignSelf: 'end',
            mt: 2,
            bgcolor: grey[200],
            width: 200,
            mb: 6,
          }}
          onClick={() => setShowArchive(!showArchive)}
        >
          <Typography variant='h5'>
            {showArchive ? 'Hide Archived' : 'Show Archive '}
          </Typography>
        </Button>
      )}
      {showArchive && <NoteList archived={true} />}
    </Stack>
  );
};

export default App;

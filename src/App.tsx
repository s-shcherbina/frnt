import { FC } from 'react';
import NoteList from './components/note-list';
import { Box } from '@mui/material';
import SummaryBar from './components/summary-bar';
import SummaryList from './components/summary-list';
import NotesBar from './components/notes-bar';

const App: FC = (): JSX.Element => {
  return (
    <Box sx={{ px: { xs: 0.1, lg: 5 } }}>
      <NotesBar />
      <NoteList />
      <SummaryBar />
      <SummaryList />
    </Box>
  );
};

export default App;

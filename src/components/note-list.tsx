import { FC } from 'react';
import uuid from 'react-uuid';
import { Stack } from '@mui/material';
import { useAppSelector } from '../utils/hooks';
import NoteItem from './note-item';
import NotesBar from './notes-bar';

const NoteList: FC<{ archived: boolean }> = ({ archived }): JSX.Element => {
  const notes = useAppSelector((state) => state.notes.list).filter(
    (note) => note.archived === archived
  );

  return (
    <>
      {notes.length ? <NotesBar archived={archived} /> : null}
      <Stack>
        {notes.map((note) => (
          <NoteItem key={uuid()} {...note} />
        ))}
      </Stack>
    </>
  );
};

export default NoteList;

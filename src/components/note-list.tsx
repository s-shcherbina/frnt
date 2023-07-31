import { FC } from 'react';
import uuid from 'react-uuid';
import { Stack } from '@mui/material';
import TableComponent from './table-component';
import CreatePopover from '../helpers/create-popover';
import { useAppSelector } from '../hooks';
import NoteItem from './note-item';

const NoteList: FC = (): JSX.Element => {
  const notes = useAppSelector((state) => state.notes.list);
  return (
    <Stack>
      {notes.map((note) => (
        <NoteItem key={uuid()} {...note} />
      ))}
      <CreatePopover
        title={'Create Note'}
        editCategory=''
        editName=''
        editContent=''
      />
    </Stack>
  );
};

export default NoteList;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { months, noteList } from '../../common/moks';

export interface ICreateNote {
  name: string;
  category: string;
  content: string;
}

export interface IEditNote extends ICreateNote {
  id: string;
  date: string;
}

export interface INote extends IEditNote {
  dates: string;
  archived: boolean;
}

interface INotesState {
  list: INote[];
}

const initialState: INotesState = {
  list: noteList,
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<ICreateNote>) {
      state.list.push({
        id: uuid(),
        name: action.payload.name,
        date: `${
          months[new Date().getMonth()]
        } ${new Date().getDate()}, ${new Date().getFullYear()}`,
        category: action.payload.category,
        content: action.payload.content,
        dates: '',
        archived: false,
      });
    },

    toggleArchived(state, action: PayloadAction<string>) {
      const toggledNote = state.list.find((note) => note.id === action.payload);
      if (toggledNote) {
        toggledNote.archived = !toggledNote.archived;
      }
    },

    toggleArchivedAll(state, action: PayloadAction<boolean>) {
      state.list
        .filter((note) => note.archived === action.payload)
        .map((note) => (note.archived = !action.payload));
    },

    removeNote(state, action: PayloadAction<string>) {
      state.list = state.list.filter((note) => note.id !== action.payload);
    },

    removeNotes(state, action: PayloadAction<boolean>) {
      state.list = state.list.filter(
        (note) => note.archived !== action.payload
      );
    },

    editNote(state, action: PayloadAction<IEditNote>) {
      const editNote = state.list.find((note) => note.id === action.payload.id);
      if (editNote) {
        editNote.category = action.payload.category;
        editNote.name = action.payload.name;
        editNote.content = action.payload.content;

        editNote.date = `${
          months[new Date().getMonth()]
        } ${new Date().getDate()}, ${new Date().getFullYear()}`;

        editNote.dates = `${action.payload.date.slice(
          action.payload.date.indexOf(' '),
          action.payload.date.indexOf(',')
        )}/${
          months.indexOf(
            action.payload.date.slice(0, action.payload.date.indexOf(' '))
          ) + 1
        }/${action.payload.date.slice(
          action.payload.date.indexOf(',') + 2
        )}, ${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`;
      }
    },
  },
});

export const {
  addNote,
  toggleArchived,
  toggleArchivedAll,
  removeNote,
  removeNotes,
  editNote,
} = noteSlice.actions;

export default noteSlice.reducer;

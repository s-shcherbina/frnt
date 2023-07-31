import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { months, noteList } from '../../moks';

interface IEditNote {
  id: string;
  name: string;
  category: string;
  content: string;
}

export interface INote {
  id: string;
  name: string;
  date: string;
  category: string;
  content: string;
  dates: { prev: string; next: string };
  archived: boolean;
}

// export interface INote extends IEditNote {
//   // id: string;
//   date: string;
//   dates: { prev: string; next: string };
//   archived: boolean;
// }

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
    // addNote(state, action: PayloadAction<Omit<IEditNote, 'id'>>) {
    addNote(state, action: PayloadAction<IEditNote>) {
      state.list.push({
        id: uuid() || action.payload.id,
        name: action.payload.name,
        date: `${
          months[new Date().getMonth()]
        } ${new Date().getDate()}, ${new Date().getFullYear()}`,
        category: action.payload.category,
        content: action.payload.content,
        dates: { prev: 'hjj', next: 'yuyuy' },
        archived: false,
      });
    },

    toggleArchived(state, action: PayloadAction<string>) {
      const toggledNote = state.list.find((note) => note.id === action.payload);
      if (toggledNote) {
        toggledNote.archived = !toggledNote.archived;
      }
    },

    removeNote(state, action: PayloadAction<string>) {
      state.list = state.list.filter((note) => note.id !== action.payload);
    },

    editNote(state, action: PayloadAction<IEditNote>) {
      const editNote = state.list.find((note) => note.id === action.payload.id);
      if (editNote) {
        editNote.category = action.payload.category;
        editNote.name = action.payload.name;
        editNote.content = action.payload.content;
      }
    },
  },
});

export const { addNote, toggleArchived, removeNote, editNote } =
  noteSlice.actions;

export default noteSlice.reducer;

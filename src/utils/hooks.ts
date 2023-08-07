import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useExistArchived = () => {
  const notes = useAppSelector((state) => state.notes.list);
  return notes.filter((note) => note.archived === true).length ? true : false;
};

export const useExistNotes = () => {
  const notes = useAppSelector((state) => state.notes.list);
  return notes.length ? true : false;
};

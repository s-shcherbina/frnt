export interface ITableComponentProps {
  category: string;
  gridName: number;
  data: string[];
  gridData: number;
}

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

export interface INotesState {
  list: INote[];
}

export interface IFormPopoverProps {
  note: INote | null;
}

export interface INoteFormProps {
  note: INote | null;
  handleClose: () => void;
}

export interface INotesListProps {
  archived: boolean;
}

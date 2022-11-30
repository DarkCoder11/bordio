import {COLUMN_NAMES, TTicket} from '../Board.constants';

export type TBoardTicketProps = {
  index: number;
  ticket: TTicket;
  moveCardHandler: (dragIndex: number, hoverIndex: number) => void;
  changeItemColumn: (currentItem: TTicket, columnName: COLUMN_NAMES) => void;
};

export type TDragObject = TTicket & {
  index: number;
  type: string;
};

export type TDropResult = {
  name: COLUMN_NAMES;
};

export type TCollectedProps = {
  isDragging: boolean;
};

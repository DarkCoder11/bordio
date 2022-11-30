import React, {useMemo, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {XYCoord} from 'react-dnd/src/types/monitors';

import {COLUMN_NAMES} from '../Board.constants';
import {BoardTicketTime, BoardTicketTitle, BoardTicketWrapper} from './BoardTicket.styled';
import {TBoardTicketProps, TCollectedProps, TDragObject, TDropResult} from './types';

const BoardTicket: React.FC<TBoardTicketProps> = ({
  index,
  ticket,
  moveCardHandler,
  changeItemColumn,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop<TDragObject>({
    accept: 'Ticket',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset() as XYCoord;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCardHandler(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag<TDragObject, TDropResult, TCollectedProps>({
    type: 'Ticket',
    item: {type: 'Ticket', index, ...ticket},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const {name} = dropResult;
        switch (name) {
          case COLUMN_NAMES.NEW_TASK:
            changeItemColumn(item, COLUMN_NAMES.NEW_TASK);
            break;
          case COLUMN_NAMES.SCHEDULED:
            changeItemColumn(item, COLUMN_NAMES.SCHEDULED);
            break;
          case COLUMN_NAMES.IN_PROGRESS:
            changeItemColumn(item, COLUMN_NAMES.IN_PROGRESS);
            break;
          case COLUMN_NAMES.COMPLETED:
            changeItemColumn(item, COLUMN_NAMES.COMPLETED);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  const backgroundColor = useMemo(() => {
    switch (ticket.column) {
      case COLUMN_NAMES.NEW_TASK: {
        return '#ABE9CE';
      }
      case COLUMN_NAMES.SCHEDULED: {
        return '#FFDFBA';
      }
      case COLUMN_NAMES.IN_PROGRESS: {
        return '#F2BAE1';
      }
      case COLUMN_NAMES.COMPLETED: {
        return '#F0F0F0';
      }

      default: {
        return '#ABE9CE';
      }
    }
  }, [ticket.column]);

  return (
    <BoardTicketWrapper ref={ref} style={{opacity, backgroundColor}}>
      <BoardTicketTitle>{ticket.name}</BoardTicketTitle>
      <BoardTicketTime>{ticket.estimate}</BoardTicketTime>
    </BoardTicketWrapper>
  );
};

export default BoardTicket;

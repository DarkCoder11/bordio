import React, {useCallback, useState} from 'react';

import {COLUMN_NAMES, INITIAL_TICKETS, TTicket} from './Board.constants';
import {BoardWrapper} from './Board.styled';
import BoardColumn from './BoardColumn/BoardColumn.component';
import BoardTicket from './BoardTicket/BoardTicket.component';

const Board = () => {
  const [tickets, setTickets] = useState<TTicket[]>(INITIAL_TICKETS);

  const moveCardHandler = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragItem = tickets[dragIndex];

      if (dragItem) {
        setTickets((prevState) => {
          const copiedStateArray = [...prevState];

          const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

          copiedStateArray.splice(dragIndex, 1, prevItem[0]);

          return copiedStateArray;
        });
      }
    },
    [tickets],
  );

  const changeItemColumn = useCallback((currentItem: TTicket, columnName: COLUMN_NAMES) => {
    setTickets((prevState) =>
      prevState.map((ticket) => ({
        ...ticket,
        column: ticket.name === currentItem.name ? columnName : ticket.column,
      })),
    );
  }, []);

  const returnItemsForColumn = useCallback(
    (columnName) => {
      return tickets
        .filter((item) => item.column === columnName)
        .map((item, index) => (
          <BoardTicket
            key={item.id}
            index={index}
            ticket={item}
            moveCardHandler={moveCardHandler}
            changeItemColumn={changeItemColumn}
          />
        ));
    },
    [changeItemColumn, moveCardHandler, tickets],
  );

  return (
    <BoardWrapper>
      <BoardColumn title={COLUMN_NAMES.NEW_TASK}>
        {returnItemsForColumn(COLUMN_NAMES.NEW_TASK)}
      </BoardColumn>
      <BoardColumn title={COLUMN_NAMES.SCHEDULED}>
        {returnItemsForColumn(COLUMN_NAMES.SCHEDULED)}
      </BoardColumn>
      <BoardColumn title={COLUMN_NAMES.IN_PROGRESS}>
        {returnItemsForColumn(COLUMN_NAMES.IN_PROGRESS)}
      </BoardColumn>
      <BoardColumn title={COLUMN_NAMES.COMPLETED}>
        {returnItemsForColumn(COLUMN_NAMES.COMPLETED)}
      </BoardColumn>
    </BoardWrapper>
  );
};

export default Board;

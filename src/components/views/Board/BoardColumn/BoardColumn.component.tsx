import React from 'react';
import {useDrop} from 'react-dnd';

import {
  BoardColumnBody,
  BoardColumnContainer,
  BoardColumnCount,
  BoardColumnTitle,
  BoardColumnWrapper,
} from './BoardColumn.styled';
import {TBoardColumnProps} from './types';

const BoardColumn: React.FC<TBoardColumnProps> = ({children, title}) => {
  const [, drop] = useDrop({
    accept: 'Ticket',
    drop: () => ({name: title}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <BoardColumnContainer ref={drop}>
      <BoardColumnWrapper>
        <BoardColumnTitle>{title}</BoardColumnTitle>
        <BoardColumnCount>4</BoardColumnCount>
      </BoardColumnWrapper>

      <BoardColumnBody>{children}</BoardColumnBody>
    </BoardColumnContainer>
  );
};

export default BoardColumn;

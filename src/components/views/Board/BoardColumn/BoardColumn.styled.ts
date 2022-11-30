import styled from 'styled-components';

export const BoardColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f3f3f3;
  padding: 25px 0 13px;
`;

export const BoardColumnBody = styled.div`
  padding: 39px 10px 20px;
  height: inherit;
  border-right: 1px solid #f3f3f3;
`;

export const BoardColumnContainer = styled.div`
  height: calc(100vh - 80px);
  min-width: 270px;

  &:first-child {
    ${BoardColumnBody} {
      padding: 39px 10px 20px 20px;
    }
  }

  &:last-child {
    ${BoardColumnBody} {
      border-right: none;
    }
  }
`;

export const BoardColumnTitle = styled.p`
  margin-right: 10px;
  font-weight: bold;
  color: #222222;
`;

export const BoardColumnCount = styled.p`
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background: #e8ebef;
  border-radius: 100px;
  color: #8c939f;
`;

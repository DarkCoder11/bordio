import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

export const Count = styled.span`
  background: #f21247;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  position: absolute;
  padding: 5px 3px 5px 4px;
  font-size: 10px;
  line-height: 10px;
  right: 0;
  bottom: 16px;
`;

import styled from 'styled-components';

import {SearchIcon} from '~/assets';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px 19px;
  position: relative;
`;

export const Input = styled.input`
  max-width: 187px;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  color: #8c939f;

  ::placeholder {
    line-height: 14px;
    color: #8c939f;
  }
`;

export const SearchLogoIcon = styled(SearchIcon)``;

export const AbsoluteContent = styled.div`
  display: flex;
  align-items: center;
  background: #2d4071;
  gap: 10px;
  border-radius: 4px;
  padding: 9px 10px;
`;

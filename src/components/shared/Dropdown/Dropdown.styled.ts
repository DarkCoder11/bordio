import styled from 'styled-components';

import {GrayArrowIcon} from '~/assets';

import {TExpandedProps} from './types';

export const DropdownWrapper = styled.button`
  gap: 15px;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  padding: 8px 14px 8px 20px;
  background: ${(props: TExpandedProps) => (!props.$expanded ? '#E1E4E7' : '#f5f8fa')};
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

export const ArrowIcon = styled(GrayArrowIcon)`
  ${(props: TExpandedProps) => props.$expanded && `transform: rotate(180deg);`}
`;

export const DropdownText = styled.p`
  text-align: right;
  color: #222222;
  margin: 0;
  font-size: 14px;
`;

export const AbsoluteDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
  min-width: 132px;
  display: none;

  ${(props: TExpandedProps) => props.$expanded && `display: block;`}
`;

export const DropdownItem = styled.div`
  color: #000000;
  padding: 12px 8px;
  text-align: start;
  cursor: pointer;

  &:hover {
    background: #f5f8fa;
    border-radius: 4px;
  }
`;

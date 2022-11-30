import React, {useMemo, useRef, useState} from 'react';

import {useOutsideClick} from '~/hooks';

import {
  AbsoluteDropdown,
  ArrowIcon,
  DropdownHeader,
  DropdownItem,
  DropdownText,
  DropdownWrapper,
} from './Dropdown.styled';
import {TDropdownProps} from './types';

const Dropdown: React.FC<TDropdownProps> = ({title, options}) => {
  const [expanded, setExpanded] = useState(false);

  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  const dropdownOptions = useMemo(
    () => options.map((option) => <DropdownItem key={option.id}>{option.value}</DropdownItem>),
    [options],
  );

  useOutsideClick(dropdownRef, () => setExpanded(false));

  return (
    <DropdownWrapper $expanded={!expanded} onClick={() => setExpanded(!expanded)} ref={dropdownRef}>
      <DropdownHeader>
        <DropdownText>{title}</DropdownText>
        <ArrowIcon $expanded={!expanded} />
      </DropdownHeader>

      <AbsoluteDropdown $expanded={expanded}>{dropdownOptions}</AbsoluteDropdown>
    </DropdownWrapper>
  );
};

export default Dropdown;

import React from 'react';

import {AbsoluteContent, Input, InputWrapper, SearchLogoIcon} from './Search.styled';

const SearchInput = () => (
  <InputWrapper>
    <AbsoluteContent>
      <Input placeholder="Search..." />
      <SearchLogoIcon />
    </AbsoluteContent>
  </InputWrapper>
);

export default SearchInput;

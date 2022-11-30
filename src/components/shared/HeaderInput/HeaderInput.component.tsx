import {SearchIcon} from '~/assets';

import {FieldWrapper, SearchInput} from './HeaderInput.styled';

const HeaderInput = () => (
  <FieldWrapper>
    <SearchInput placeholder="Search..." />
    <SearchIcon />
  </FieldWrapper>
);

export default HeaderInput;

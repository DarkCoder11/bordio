import React from 'react';

import {AvatarImage} from '~/assets';
import {Button, Dropdown, HeaderInput, Notification} from '~/components';

import {DROPDOWN_OPTIONS} from './Header.constants';
import {ActionsWrapper, AvatarWrapper, UserWrapper, Wrapper} from './Header.styled';

const HeaderWrapper = () => {
  return (
    <Wrapper>
      <ActionsWrapper>
        <Button />
        <Dropdown title="Kanban" options={DROPDOWN_OPTIONS} />
        <Dropdown title="Filter" options={DROPDOWN_OPTIONS} />
      </ActionsWrapper>

      <UserWrapper>
        <HeaderInput />
        <Notification count={99} />
        <AvatarWrapper width={40} height={40} src={AvatarImage} alt="Avatar" />
      </UserWrapper>
    </Wrapper>
  );
};

export default HeaderWrapper;

import React from 'react';

import {PlusIcon} from '~/assets';

import {ButtonText, ButtonWrapper} from './Button.styled';

const Button = () => (
  <ButtonWrapper>
    <PlusIcon />
    <ButtonText>Add new</ButtonText>
  </ButtonWrapper>
);

export default Button;

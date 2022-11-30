import React from 'react';

import {BellIcon} from '~/assets';

import {Count, Wrapper} from './Notification.styled';
import {TNotificationProps} from './types';

const Notification: React.FC<TNotificationProps> = ({count}) => (
  <Wrapper>
    <BellIcon />
    {count > 0 && <Count>{count < 100 ? count : '99+'}</Count>}
  </Wrapper>
);

export default Notification;

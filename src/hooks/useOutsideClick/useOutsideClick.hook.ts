import React from 'react';

import {useEventListener} from '../useEventListener';

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: (e?: Event) => void,
): void => {
  const handleClick = (event: Event): void => {
    const isOutsideTarget = ref.current && !ref.current.contains(event.target as Node);

    if (isOutsideTarget) {
      callback(event);
    }
  };

  useEventListener('click', handleClick);
};

export default useOutsideClick;

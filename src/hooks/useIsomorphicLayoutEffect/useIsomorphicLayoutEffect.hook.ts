import {useEffect, useLayoutEffect} from 'react';

import {IsBrowser} from '~/constants';

const useIsomorphicLayoutEffect = IsBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;

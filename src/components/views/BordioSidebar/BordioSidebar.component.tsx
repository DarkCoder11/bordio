import {LogoIcon} from '~/assets';
import {BordioNavigation, BordioWorkspace, SearchInput} from '~/components';

import {LogoWrapper, Wrapper} from './BordioSidebar.styled';

const BordioSidebar = () => (
  <Wrapper>
    <LogoWrapper>
      <LogoIcon />
    </LogoWrapper>

    <SearchInput />

    <BordioWorkspace />

    <BordioNavigation />
  </Wrapper>
);

export default BordioSidebar;

import React from 'react';

import {BordioSidebar, Header, ToolsSidebar} from '~/components';

import {MainContainer, SectionWrapper} from './Page.styled';

const PageLayout: React.FC = ({children}) => (
  <MainContainer>
    <BordioSidebar />
    <ToolsSidebar />

    <SectionWrapper>
      <Header />
      {children}
    </SectionWrapper>
  </MainContainer>
);

export default PageLayout;

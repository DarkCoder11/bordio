import React from 'react';

import {WorkspaceImage, WorkspaceTitle, WorkspaceWrapper} from './BordioWorkspace.styled';

const BordioWorkspace = () => (
  <WorkspaceWrapper>
    <WorkspaceImage />
    <WorkspaceTitle>My workspace</WorkspaceTitle>
  </WorkspaceWrapper>
);

export default BordioWorkspace;

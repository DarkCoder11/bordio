import React, {useState} from 'react';

import {TOOLS_NAVIGATION_ITEMS} from './ToolsSidebar.constants';
import {Header, Item, Text, ToolsLink, Wrapper} from './ToolsSidebar.styled';

const ToolsSidebar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);

  const toolsNavigationItemsRender = TOOLS_NAVIGATION_ITEMS.map(({id, text, Icon}) => (
    <ToolsLink to="#" key={id}>
      <Item currentRoute={currentRoute === id} onClick={() => setCurrentRoute(id)}>
        <div>
          <Icon />
        </div>
        <Text currentRoute={currentRoute === id}>{text}</Text>
      </Item>
    </ToolsLink>
  ));

  return (
    <Wrapper>
      <Header>Tools</Header>

      {toolsNavigationItemsRender}
    </Wrapper>
  );
};

export default ToolsSidebar;

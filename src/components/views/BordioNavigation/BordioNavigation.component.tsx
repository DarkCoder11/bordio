import {Fragment} from 'react';

import {ArrowIcon} from '~/assets';

import {BORDIO_NAVIGATION_ITEMS} from './BordioNavigation.constants';
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  NavigationListItemContent,
  WorkspaceTitle,
  WorkspaceTitleWrapper,
} from './BordioNavigation.styled';

const BordioNavigation = () => {
  const bordioNavigationItemsRender = BORDIO_NAVIGATION_ITEMS.map(({title, Icon, children}) => (
    <Fragment key={title}>
      <NavigationListItem>
        <WorkspaceTitleWrapper>
          <ArrowIcon />
          <WorkspaceTitle>{title}</WorkspaceTitle>
        </WorkspaceTitleWrapper>

        {Icon && <Icon />}
      </NavigationListItem>

      {children.map((item) => (
        <NavigationListItemContent key={item.id}>{item.name}</NavigationListItemContent>
      ))}
    </Fragment>
  ));

  return (
    <Navigation>
      <NavigationList>{bordioNavigationItemsRender}</NavigationList>
    </Navigation>
  );
};

export default BordioNavigation;

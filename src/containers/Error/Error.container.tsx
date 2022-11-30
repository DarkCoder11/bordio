import React from 'react';

import {Link} from '~/components';
import {Routes} from '~/constants';

import {Container} from './Error.styled';

const ErrorContainer: React.FC = () => (
  <Container>
    <h1>404</h1>
    <h4>Page not found</h4>
    <Link to={Routes.Dashboard}>Home</Link>
  </Container>
);

export default ErrorContainer;

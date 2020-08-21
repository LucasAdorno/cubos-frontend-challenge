import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="page-header">
      <h1 className="header-title">Movies</h1>
    </Container>
  )
}

export default Header;
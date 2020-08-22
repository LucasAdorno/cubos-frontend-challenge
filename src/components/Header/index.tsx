import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container className="page-header">
      <Link to='/' className="header-title">
        Movies
      </Link>
    </Container>
  )
}

export default Header;
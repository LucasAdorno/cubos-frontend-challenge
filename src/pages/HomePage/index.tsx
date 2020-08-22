import React, { useState, ChangeEvent } from 'react';
import { listMovies } from '../../services/api'

import { Container } from './styles';

const HomePage: React.FC = () => {

  interface Dados {
    title: string,
  }

  const [dados, setDados] = useState<[Dados]>([{ title: 'nada' }])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    listMovies(e.target.value).then(response => {
      setDados(response.data.results)
    });
  }

  return (
    <Container id='homepage-content'>
      <input id='search-input' 
        type='text'
        placeholder='Busque um filme por nome, ano ou gênero...'
        onChange={(e) => handleInput(e)}
      />
    </Container>
  );
}

export default HomePage;
import React from 'react';

// import { Container } from './styles';

interface PropsMovie{
  match: {
    params: {
      id: string
    }
  }
}

const MoviePage: React.FC<PropsMovie> = ({match}) => {
return <h1>hello Movie {match.params.id}</h1>;
}

export default MoviePage;
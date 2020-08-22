import React, { useEffect, useState } from 'react';
import { detailsMovie, posterMovie } from '../../services/api';
// import { Container } from './styles';

interface PropsMovie {
  match: {
    params: {
      id: string
    }
  }
}

interface Dados {
  title: string;
  poster_path: string;
}

const MoviePage: React.FC<PropsMovie> = ({ match }) => {

  const [dados, setDados] = useState<Dados>();
  const imageUrl = dados?.poster_path || '';

  useEffect(() => {
    detailsMovie(match.params.id).then((response) => {
      setDados(response.data);
    })
  }, [match.params.id])

  return (
    <>
      <h1>hello Movie {dados?.title}</h1>
      <img src={posterMovie(imageUrl)} alt="Poster do filme"/>
    </>
  );
}

export default MoviePage;
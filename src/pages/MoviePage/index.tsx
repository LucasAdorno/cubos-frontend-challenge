import React, { useEffect, useState } from 'react';
import { detailsMovie } from '../../services/api';
// import { Container } from './styles';

interface PropsMovie {
  match: {
    params: {
      id: string
    }
  }
}

const MoviePage: React.FC<PropsMovie> = ({ match }) => {

  const [title, setTitle] = useState('')

  useEffect(() => {
    detailsMovie(match.params.id).then((res) => {
      setTitle(res.data.title);
    })
  }, [match.params.id])

return <h1>hello Movie {title}</h1>;
}

export default MoviePage;
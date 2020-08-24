import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listGenre, posterMovie } from '../../services/api';

import { Container } from './styles';

interface CardProps {
  dados: {
    id: string,
    title: string,
    description: string,
    release_date: string,
    vote_average: string,
    poster_path: string,
    genre_ids: number[]
  }
}

interface GenresComplete {
  id: number,
  name: string
}

const CardMovie: React.FC<CardProps> = ({ dados }) => {

  const [genres, setGenres] = useState<string[]>([])

  useEffect(() => {
    getGenres(dados.genre_ids);
  }, [dados.genre_ids])

  const getGenres = (genresIds: number[]) => {
    listGenre().then(response => {
      const genresComplete: GenresComplete[] = response.data.genres;
      let genresNames: string[] = [];
      genresIds.map(genreRequired =>
        genresComplete.map(genreConsult =>
          genreConsult.id === genreRequired ? genresNames.push(genreConsult.name) : ''
        )
      );
      setGenres(genresNames)
    })
  }


  return (
    <Link to={`/movie/${dados.id}`}>
      <Container>
        {genres.map(i=> <p>{i}</p>)}
        <img src={posterMovie(dados.poster_path)} alt=""/>
      </Container>
    </Link>
  );
}

export default CardMovie;
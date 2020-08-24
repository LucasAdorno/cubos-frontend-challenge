import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GenreList from '../GenreList';
import ajustDate from '../../utils/ajustDate';
import { listGenre, posterMovie } from '../../services/api';

import { Container } from './styles';

interface CardProps {
  dados: {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    genre_ids: number[]
  }
}

interface GenresComplete {
  id: number,
  name: string
}

const CardMovie: React.FC<CardProps> = ({ dados }) => {

  const [genres, setGenres] = useState<string[]>([]);
  const [date, setDate] = useState<string>();

  useEffect(() => {
    getGenres(dados.genre_ids);
    setDate(ajustDate(dados.release_date));
  }, [dados.genre_ids, dados.release_date])

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
        <img src={posterMovie(dados.poster_path)} alt="poster do filme" />
        <div className='card-content'>
          <h1 className="card-title">{dados.title}</h1>
          <div className='card-infos'>
            <div className='card-percent-border'>
              <p className='card-percent'>{dados.vote_average * 10}%</p>
            </div>
            <p className='card-date'>{date}</p>
            <p className='card-description'>{dados.overview}</p>
            <div className='card-genre-list'>
              <GenreList genres={genres} />
            </div>
          </div>
        </div>
      </Container>
    </Link>
  );
}

export default CardMovie;
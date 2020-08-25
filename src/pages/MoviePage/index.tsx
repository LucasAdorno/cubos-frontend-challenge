import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import GenreList from '../../components/GenreList';
import ajustDate from '../../utils/ajustDate';
import { statusTranslate, languageTranslate } from '../../utils/translateStatic';
import { detailsMovie, posterMovie, trailerMovie } from '../../services/api';

interface PropsMovie {
  match: {
    params: {
      id: string
    }
  }
}

interface Dados {
  title: string,
  poster_path: string,
  overview: string,
  vote_average: number,
  key: string
}

const MoviePage: React.FC<PropsMovie> = ({ match }) => {

  const [dados, setDados] = useState<Dados>();
  const [date, setDate] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [timeMovie, setTimeMovie] = useState<string>();
  const [budget, setBudget] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [genres, setGenres] = useState<string[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>();


  const imageUrl = dados?.poster_path || '';



  useEffect(() => {
    detailsMovie(match.params.id).then((response) => {
      const data = response.data
      setDados(data);
      setDate(ajustDate(data.release_date));
      setStatus(statusTranslate(data.status));
      setLanguage(languageTranslate(data.original_language));
      setTimeMovie(`${Math.floor(data.runtime / 60)}h${data.runtime % 60}min`);
      setBudget(data.budget);
      setRevenue(data.revenue);
      setProfit(data.revenue - data.budget);
      setGenres(getGenreNames(data.genres));
      trailerMovie(match.params.id).then(trailerResponse => {
        if (trailerResponse.data.results[0]) {
          setTrailerUrl(trailerResponse.data.results[0].key)
        }
      })
    })
  }, [match.params.id])

  const getGenreNames = (genres: [{ id: number, name: string }]) => {
    let genreNames: string[] = [];
    genres.map(genre =>
      genreNames.push(genre.name)
    )
    return genreNames;
  }

  return (
    <Container>
      <div id='details-header'>
        <h1 id='details-title'>{dados?.title}</h1>
        <p id='details-date'>{date}</p>
      </div>
      <div id='details-content'>
        <img src={posterMovie(imageUrl)} alt="Poster do filme" />
        <div id='details-content-texts'>
          <h1 className='details-section-title'>Sinopse</h1>
          <p id='details-description'>{dados?.overview}</p>
          <h1 className="details-section-title">Informações</h1>
          <div id='details-infos'>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Situação</h2>
              <p className='details-section-text'>{status}</p>
            </div>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Idioma</h2>
              <p className='details-section-text'>{language}</p>
            </div>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Duração</h2>
              <p className='details-section-text'>{timeMovie}</p>
            </div>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Orçamento</h2>
              <p className='details-section-text'>${budget.toLocaleString('pt-BT')},00</p>
            </div>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Receita</h2>
              <p className='details-section-text'>${revenue.toLocaleString('pt-BT')},00</p>
            </div>
            <div className='details-infos-item'>
              <h2 className='details-section-subtitle'>Lucro</h2>
              <p className='details-section-text'>${profit.toLocaleString('pt-BT')},00</p>
            </div>
          </div>
          <div className='details-genre-list'>
            <GenreList genres={genres} />
          </div>
          <div className='details-percent-border'>
            <p className='details-percent'>{dados ? dados?.vote_average * 10 : 0}%</p>
          </div>
        </div>
      </div>
      {trailerUrl ? <iframe title='youtube-trailer' width="100%"
        height="560px"
        src={`https://www.youtube.com/embed/${trailerUrl}`}
        frameBorder="0" allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe> 
      : <></>}
    </Container>
  );
}

export default MoviePage;
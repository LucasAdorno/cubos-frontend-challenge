import React, { useState, useRef } from 'react';
import CardMovie from '../../components/CardMovie';
import countPageArray from '../../utils/countPageArray';
import { listMovies } from '../../services/api';

import { Container } from './styles';

interface Dados {
  id: string,
  title: string,
  description: string,
  release_date: string,
  vote_average: string,
  poster_path: string,
  genre_ids: number[]
}

const HomePage: React.FC = () => {

  const [dados, setDados] = useState<[Dados]>();
  const [loading, setLoading] = useState('');
  const [validResponse, setValidResponse] = useState(false);
  const [pageCount, setPageCount] = useState([1]);
  const [pageMarker, setPageMarker] = useState(1);
  let pageConsult = 1;
  const inputRef = useRef<HTMLInputElement>(null);


  const searchMovies = () => {
    setValidResponse(false);
    setLoading('Carregando...');
    if (inputRef && inputRef.current) {
      listMovies(inputRef.current.value)
        .then(response => {
          let data = response.data.results;
          setDados(data.slice((pageConsult - 1) * 5, pageConsult * 5))
          setLoading('');
          setPageMarker(pageConsult);
          setPageCount(countPageArray(data.length));
          console.log(data.length)
          setValidResponse(true);
        })
        .catch(err => {
          setLoading('Busque seus filmes preferidos!')
        })
    }
  }

  const selectPage = (count: number) => {
    pageConsult = count;
    searchMovies();
  }

  return (
    <Container>
      <div id='homepage-content'>
        <input id='search-input'
          type='text'
          ref={inputRef}
          placeholder='Busque um filme por nome, ano ou gênero...'
          onChange={() => searchMovies()}
        />

        {validResponse ? dados && dados.map((dado) =>
          <CardMovie key={dado.id} dados={dado} />
        )
          : <h1>{loading}</h1>
        }
      </div>
      <div id='pagination'>
        {validResponse ? pageCount.map((count) =>
          <div className={`border-marker ${(pageCount.indexOf(count) + 1) === pageMarker ? 'active' : ''}`}>
            <input
              key={count}
              type='button'
              className='page-marker'
              value={count}
              onClick={() => selectPage(count)}
              title={`${count}`} />
          </div>
        )
          : <></>
        }
      </div>
    </Container>
  );
}

export default HomePage;
import React from 'react';
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Loading from '../../../../components/Loading/Loading';
import './Banner.style.css';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  
  if(isLoading){
    <Loading />
  }

  if(isError){
    <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <div style={{
        backgroundImage:`url('https://media.themoviedb.org/t/p/w1920_and_h600_bestv2${data?.results[0].backdrop_path}')`
    }} className='banner'>
        <div className='info'>
            <h2 className='title'>{data?.results[0].title}</h2>
            <p className='overview'>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner
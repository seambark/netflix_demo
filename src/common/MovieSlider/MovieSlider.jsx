import React from 'react';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import Loading from '../../components/Loading/Loading';
import Alert from 'react-bootstrap/Alert';

const MovieSlider = ({title, movies, responsive}) => {
  const { data, isLoading, isError, error} = movies;

  if(isLoading){
    return <Loading />
  }

  if(isError){
      return <Alert variant="danger">{error.message}</Alert>
  }


  return (
    <div className='movie_slide_area'>
        <h2 className='title'>{title}</h2>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider p-2'
            containerClass='carousel-container'
            responsive={responsive}
        >
            {data?.results.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        </Carousel>
    </div>
  )
}

export default MovieSlider
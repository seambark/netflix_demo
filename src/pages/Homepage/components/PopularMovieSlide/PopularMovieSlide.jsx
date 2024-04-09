import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import { useTopRatedQuery } from '../../../../hook/useTopRated';
import { useUpcomingQuery } from '../../../../hook/useUpcoming';
import 'react-multi-carousel/lib/styles.css';
import './PopularMovieSlide.style.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';



const PopularMovieSlide = () => {
    const popular = usePopularMoviesQuery();
    const upComing = useUpcomingQuery();
    const topRated = useTopRatedQuery();

  return (
    <div className='section'>
        <MovieSlider title="Popular Movies" movies={popular} responsive={responsive}/>
        <MovieSlider title="Top Rated Movies" movies={topRated} responsive={responsive}/>
        <MovieSlider title="Upcoming Movies" movies={upComing} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlide
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMovieGenreQuery } from '../../hook/useMovieGenre';
import { Link } from 'react-router-dom';
// import iconCamera from '../../image/camera.svg';

const MovieCard = ({movie, widthFixed=false}) => {

    const {data:genreData} = useMovieGenreQuery();
    // const moviePosterPath =  movie.poster_path? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`: iconCamera;

    const genreFilters = (genreIds) => {
        const genreList = genreIds?.map((id)=>{
            const genreObj = genreData?.find((genre)=>genre.id === id)
            return genreObj?.name;
        })
        
        return genreList;
    }

  return (
    <div style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie?.poster_path})`}} className={`movie_card ${widthFixed?`fixed`:``}`}>
        <Link to={`/movies/${movie?.id}`}>
        <div className='overlay'>
            <div className='title'>
                {movie?.adult && <span className='adult'>18</span>}
                <strong>{movie.title}</strong>
            </div>
            <div className='other'>
                <div className='genre'>
                    {genreFilters(movie.genre_ids).map((id,index)=>(
                        <Badge bg='danger' key={index}>{id}</Badge>
                    ))}
                </div>
                <span className='average'>
                    <FontAwesomeIcon icon={faStar} />
                    {movie.vote_average}
                </span>
                <span className='popularity'>
                    <FontAwesomeIcon icon={faUser} />
                    {movie.popularity}
                </span>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default MovieCard
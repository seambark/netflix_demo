import React from 'react';
import Loading from '../../../components/Loading/Loading';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviesList.style.css';

const MoviesList = ({movieData, handlePageClick, page, genre, sort}) => {
    
    const { data, isLoading, isError, error} = movieData;

    const sortedMovies =
    data?.results.sort((a, b) => {
      if (sort === "un-popularity") {
        return a.popularity - b.popularity;
      } else {
        return b.popularity - a.popularity;
      }
    })|| [];

    const filteredMovies = sortedMovies.filter((movie) => {
      if (genre) {
          return movie.genre_ids.includes(genre)
        } else {
          return true;
        }
      });
    
    if(isLoading){
      return <Loading />
    }
  
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

  return (
    <div>
        <ul className='movie_list'>
        {filteredMovies?.map((movie,index) => (
          <li key={index}>
            <MovieCard movie={movie} widthFixed/>
          </li>
        ))}
        </ul>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageCount={data?.total_pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          forcePage={page-1}
        />
    </div>
  )
}

export default MoviesList
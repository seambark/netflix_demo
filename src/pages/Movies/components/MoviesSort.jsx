import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useMovieGenreQuery } from '../../../hook/useMovieGenre';
import './MoviesSort.style.css';

const MoviesSort = ({setSort, setGenre, genre, sort}) => {
  const { data } = useMovieGenreQuery();
  const [popularitySort, setPopularity] = useState('')
  const [genreSort, setGenreSort] = useState('')

  const popularityList = (popularity) => {
    
    setSort(popularity)
    if(popularity === 'un-popularity'){
      setPopularity('인기 적은순')
    } else {
      setPopularity('인기 많은순')
    }
  }

  const genreList = (genreData) => {
    
    if(genreData === ''){
      setGenre(null)
      setGenreSort('장르 정렬')
    } else {
      setGenre(genreData.id)
      setGenreSort(genreData.name)
    }
  }

  return (
    <div className='sorting'>
        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {popularitySort?popularitySort:'인기 정렬'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => popularityList('popularity')}>인기 많은순</Dropdown.Item>
                <Dropdown.Item onClick={() => popularityList('un-popularity')}>인기 적은순</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                {genreSort?genreSort:'장르 정렬'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => genreList('')}>초기화</Dropdown.Item>
                {data?.map((genre,index) => {
                  return <Dropdown.Item key={index} onClick={() => genreList(genre)}>{genre.name}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default MoviesSort
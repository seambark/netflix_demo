import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hook/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import Content from '../../common/Content/Content';
import MoviesSort from './components/MoviesSort';
import './MoviesPage.style.css';



// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 결우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch

// 장르검색
// 인기순 순서

const MoviesPage = () => {
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [genre, setGenre] = useState(null);
  const keyword = query.get('q');
  

  const search = useSearchMovieQuery({keyword, page});

  const handlePageClick = ({selected}) => {
    console.log('페이지',selected)
    setPage(selected+1)
  }
  
  return (
    <Content>
      <div>
        <MoviesSort setGenre={setGenre} setSort={setSort} sort={sort} genre={genre}/>
      </div>
      <div>
        <div className='sub_info'>
          {keyword ? <span className='keyword'>"{keyword}" 관련 영화</span> :''}
          <span className='total'>총 {search? search?.data?.total_results : '0'} 개</span>
        </div>
        <MoviesList movieData={search} handlePageClick={handlePageClick} page={page} genre={genre} sort={sort}/>
      </div>
    </Content>
  )
}

export default MoviesPage
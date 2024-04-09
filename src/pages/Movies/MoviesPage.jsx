import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hook/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Alert from 'react-bootstrap/Alert';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import './MoviesPage.style.css';
import Content from '../../common/Content/Content';
import ReactPaginate from 'react-paginate';


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
  const keyword = query.get('q');

  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword, page});

  const handlePageClick = ({selected}) => {
    console.log('페이지',selected)
    setPage(selected+1)
  }

  // useEffect(() => {
  //   setPage(1);
  // }, [keyword]);


  if(isLoading){
    return <Loading />
  }

  if(isError){
      return <Alert variant="danger">{error.message}</Alert>
  }
  // 페이지 이동 시 초기화
  
  return (
    <Content>
      <div>
        <div className='sub_info'>
          {keyword ? <span className='keyword'>"{keyword}" 관련 영화</span> :''}
          <span className='total'>총 {data?data.total_results:'0'} 개</span>
          <span>{data?data.page:'0'}</span>
        </div>
        <ul className='movie_list'>
        {data?.results.map((movie,index) => (
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
          // renderOnZeroPageCount={null}
          forcePage={page-1}
        />
      </div>
    </Content>
  )
}

export default MoviesPage
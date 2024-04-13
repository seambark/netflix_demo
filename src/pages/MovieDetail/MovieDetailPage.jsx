import React, { useEffect } from 'react'
import { useMovieDetailsQuery } from '../../hook/useMovieDetails';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Alert from 'react-bootstrap/Alert';
import Reviews from './components/Reviews/Reviews';
import Similar from './components/Similar/Similar';
import Videos from './components/Videos/Videos';
import Content from '../../common/Content/Content';
import Badge from 'react-bootstrap/Badge';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nodata from '../../common/Nodata/Nodata';

import './MovieDetailPage.style.css';

const MovieDetailPage = () => {

  const { id } = useParams();
  const { data, isLoading, isError, error} = useMovieDetailsQuery({id});

  useEffect(() => {

  },[data])

  if(isLoading){
    return <Loading />
  }

  if(isError){
      return <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <>
      <Content>
        <div className='movie_details'>
          <div className='img'>
            <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`} alt=''/>
          </div>
          <div className='txt'>
            <h2 className='title'>{data?.original_title}</h2>
            <span className='adult_type'></span>
            <div className='genre'>
              {data?.adult === true ? <Badge bg='danger'>19세 이상</Badge>:<Badge bg='success'>전체 관람가</Badge>}
              
              {data?.genres.map((genres,index) => {
                return <Badge bg='danger' key={index}>{genres.name}</Badge>
              })}
            </div>
            <p className='average'>
              <FontAwesomeIcon icon={faStar} />
              {data?.vote_average} / 10 <span className='count'>참여 : {data?.vote_count}</span>
            </p>
            <dl className='movie_info'>
              <dt>개봉</dt>
              <dd>{data?.release_date}</dd>
              <dt>러닝타임</dt>
              <dd>{data?.runtime}</dd>
              <dt>국가</dt>
              <dd className='list_comma'>
                {data?.production_countries.map((countries,index) => {
                  return <span key={index}>{countries.name}</span>
                })}
              </dd>
              <dt>배급</dt>
              <dd className='list_comma'>
                {data?.production_companies.map((companies,index) => {
                  return <span key={index}>{companies.name}</span>
                })}
              </dd>
              <dt>예산</dt>
              <dd>{data?.budget.toLocaleString('ko-KR')}</dd>
              <dt>인기도</dt>
              <dd>{data?.popularity}</dd>
            </dl>
            <p className='overview'>{data?.overview !== '' ? data?.overview : <Nodata text='요약내용이 없습니다.' noBg noPd/>}</p>
          </div>
        </div>
        <h3 className='sub_title'>리뷰</h3>
        <Reviews />
        <h3 className='sub_title'>무비 클립</h3>
        <Videos/>
        <h3 className='sub_title'>비슷한 영화 추천</h3>
        <Similar />
      </Content>
      
    </>
  )
}

export default MovieDetailPage
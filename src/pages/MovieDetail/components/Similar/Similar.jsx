import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieSimilarQuery } from '../../../../hook/useMovieSimilar';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import './Similar.style.css';
import Nodata from '../../../../common/Nodata/Nodata';


const Similar = () => {
    // eslint-disable-next-line
    const [page, setPage] = useState(1);
    const { id } = useParams();
    const { data } = useMovieSimilarQuery({id, page});

    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 6,
    //         slidesToSlide: 6
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 3,
    //         slidesToSlide: 3
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1
    //     }
    // };

  return (
    <div className='similar_area'>
        {data?.total_results > 0 ? (
            <ul className='similar_list'>
                {data?.results.map((movie,index) => {
                    return (
                        <li key={index}>
                            <MovieCard movie={movie} />
                        </li>
                    )
                })}
            </ul>
        ): <Nodata text='추천영화가 없습니다.' />}
    </div>
  )
}

export default Similar
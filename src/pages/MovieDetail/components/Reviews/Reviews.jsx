import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieReviewsQuery } from '../../../../hook/useMovieReviews';
import Nodata from '../../../../common/Nodata/Nodata';
import './Reviews.style.css';

const Reviews = () => {
    // eslint-disable-next-line
    const [page, setPage] = useState(1);
    const { id } = useParams();
    const { data } = useMovieReviewsQuery({id, page});
    // const reviewAll = document.querySelectorAll('.reviews_list .review');

    const clickMore = (e) => {
        const review = e.target.parentNode;
        review.classList.toggle('active');
    }

    // const getLineLength = () =>{
    //     console.log('여기')
    //     if(reviewAll.length > 0){
    //         reviewAll.forEach((item) => {
    //             console.log(item.children[1].scrollHeight)
    //             return item.children[1].scrollHeight > 50 ? item.children[2].classList.add('btn_more'):item.children[2].classList.remove('btn_more'), setContentCheck(item.children[1].scrollHeight);
    //         })
    //     } 
    //   }
      
    // useEffect(() => {
    //     getLineLength()
    // },[])

  return (
    <div className='reviews_area'>
        {data?.total_results > 0 ? (
            <ul className='reviews_list'>
                {data?.results.map((review,index) => {
                    return (
                        <li key={index}>
                            <div className='review'>
                                <p className='name'>
                                    {review.author}
                                </p>
                                <div className='text'>
                                    {review.content}
                                    {console.log(review.content.length)}
                                </div>
                                {/* <button type='button' onClick={(e) => clickMore(e)} className={review?.content.length > 200?`btn_more`:``}>더보기</button> */}
                                <button type='button' onClick={(e) => clickMore(e)} className={`btn_more`}>더보기</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        ):<Nodata text='리뷰가 없습니다.'/>}
    </div>
  )
}

export default Reviews
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieVideosQuery } from '../../../../hook/useMovieVideos';
import Button from 'react-bootstrap/Button';
import Popup from '../../../../common/Popup/Popup';
import'./Videos.style.css';
import Nodata from '../../../../common/Nodata/Nodata';

const Videos = () => {
    const { id } = useParams();
    const { data } = useMovieVideosQuery({id});
    const [show, setShow] = useState(false);
    const [videoData, setVideoData] = useState(null);
    

    const handleShow = (videos) => {
        setShow(true)
        setVideoData(videos)
    }

  return (
    <>
        <div className='videos_area'>
            {data?.results.length > 0 ? (
                <ul className='videos_list'>
                    {data?.results.map((videos,index) => {
                        return (
                            <li key={index} style={{backgroundImage:`url('https://i.ytimg.com/vi/${videos?.key}/hqdefault.jpg')`}}>
                                <p className='name'>{videos?.name}</p>
                                <Button variant="danger" onClick={() =>handleShow(videos)}>
                                    예고편 보기
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            ): <Nodata text='무비 클립이 없습니다.'/>}
        </div>
        <Popup show={show} setShow={setShow} videoData={videoData}/>
    </>
  )
}

export default Videos
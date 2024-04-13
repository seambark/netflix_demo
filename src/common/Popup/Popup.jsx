import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import YouTube from 'react-youtube';
import './Popup.style.css';

const Popup = ({show, setShow, videoData}) => {
    const handleClose = () => setShow(false);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{videoData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube
                videoId={videoData?.key}              
                id={videoData?.key}                               
                opts={opts}
                className='movie_youtube'                               
                /> 
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            닫기
        </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Popup
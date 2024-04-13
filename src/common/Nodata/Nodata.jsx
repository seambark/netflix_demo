import React from 'react';
import './Nodata.style.css';

const Nodata = ({keyword, text, noBg, noPd}) => {
  return (
    <div className={`no_data ${noBg === true?`no_bg`:``} ${noPd === true?`no_pd`:``}`}>
        <p><span className='keyword'>{keyword}</span> <span className='text'>{text}</span></p>
    </div>
  )
}

export default Nodata
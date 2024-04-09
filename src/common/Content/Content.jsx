import React from 'react';
import './Content.style.css';

const Content = ({children}) => {
  return (
    <div className='content'>
        {children}
    </div>
  )
}

export default Content
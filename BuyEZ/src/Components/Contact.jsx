import Banner from './Banner';

import React from 'react'

export default function Contact(props) {

  return (
    <div>
      <Banner/>
      <div className='banner-title'>
        <h1>{props.name}</h1>
      </div> 
    </div>
  )
}

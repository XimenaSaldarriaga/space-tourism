import React from 'react'
import './space.scss'

const Space = () => {
  return (
    <div className='space'>
        <div className='space__text'>
            <span className='space__travel'>SO, YOU WANT TO TRAVEL TO</span>
            <span className='space__title'>SPACE</span>
            <span className='space__lets'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</span>
        </div>
        <div className='space__explore'>
            <a>EXPLORE</a>
        </div>
    </div>
  )
}

export default Space
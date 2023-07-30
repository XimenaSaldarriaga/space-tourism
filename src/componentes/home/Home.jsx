import React from 'react'
import logo from '../../images/shared/logo.svg'
import Navbar from '../navbar/Navbar'
import Space from '../space/Space'
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__logodiv'>
                <img className='home__logo' src={logo} alt="" />
                <span className='home__span'>________________________________________________</span>
                </div>
                <></>
                <Navbar />
            </div>
            <Space />
        </div>
    )
}

export default Home
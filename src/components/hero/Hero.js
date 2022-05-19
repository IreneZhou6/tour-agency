import './Hero.styles.css';
import { AiOutlineSearch } from 'react-icons/ai';


import Video from '../../assets/maldivesVideo.mp4'

export default function Hero() {
    return (
        <div className='hero'>
            <video id='video'>
                <source src={Video} type='video/mp4' autoPlay muted loop />
            </video>
            <div className='overlay' />
            <div className='content' >
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form className='form'>
                    <input type='text' placeholder='Search Destinations' />
                    <button><AiOutlineSearch className='icon' /></button>
                </form>
            </div>
        </div>


    )
}
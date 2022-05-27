import './Navbar.styles.scss';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaRegWindowClose } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div name='home' className={nav ? 'navbar nav-mob' : 'navbar'}>
            <div className='logo'><h2>BEACHES.</h2></div>
            <ul className='nav-menu'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
                <Link to='travel' smooth={true} duration={500}><li>Travel</li></Link>
                <Link to='carousel' smooth={true} duration={500}><li>Views</li></Link>
            </ul>
            <div className='nav-icons'>
                <BiSearch className='icon' />
                <BsPerson className='icon' />
            </div>
            {!nav ? <div className='hamburger' onClick={handleNav}>
                <HiOutlineMenuAlt4 className='icon' />
            </div> : <div onClick={handleNav} className='hamburger' >
                <FaRegWindowClose className='icon' />
            </div>}
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
                    <Link to='travel' smooth={true} duration={500}><li>Travel</li></Link>
                    <Link to='carousel' smooth={true} duration={500}><li>Views</li></Link>
                </ul>
                <button>Search</button>
                <button>Account</button>
                <div className='social-icons'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
        </div>

    )
}
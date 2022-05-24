import './Navbar.styles.scss';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaRegWindowClose } from 'react-icons/fa';
import { useState } from 'react';


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className={nav ? 'navbar nav-mob' : 'navbar'}>
            <div className='logo'><h2>BEACHES.</h2></div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
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
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
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
import './Nav.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';


export default function Nav() {

const [isScrolled, setIsScrolled] = useState(true);

useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 10) {
            setIsScrolled(false)
        } else {
            setIsScrolled(true)
        }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
},[])
  return (
    <div className='nav'>
        <div className={`nav__upper ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav__contact'>
                <div className='nav__contact-phone'>
                    <FontAwesomeIcon className='icon' icon={faMobileScreen} />
                    <span>+ 48 7894578902</span>
                </div>
                <div className='nav__contact-open'>
                    <FontAwesomeIcon className='icon' icon={faClock} />
                    <span>Mon-Sat: 11:00 AM - 23:00 PM</span>
                </div>
            </div>
            <div className='nav__button'>
                <button>Book a table</button>
            </div>
        </div>
        <div className='nav__lower'>
            <div className='nav__title'>
                <h1>Restaurantly</h1>
            </div>
            <div className='nav__list'>
                <ul className='nav__links'>
                    <li className='nav__links-link'>Home</li>
                    <li className='nav__links-link'>About</li>
                    <li className='nav__links-link'>Menu</li>
                    <li className='nav__links-link'>Specials</li>
                    <li className='nav__links-link'>Events</li> 
                    <li className='nav__links-link'>Chefs</li>
                    <li className='nav__links-link'>Gallery</li>
                    <li className='nav__links-link'>Contact</li>              
                </ul>
            </div>
        </div>
    </div>
  )
}

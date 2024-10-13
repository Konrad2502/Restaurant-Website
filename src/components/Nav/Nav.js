import './Nav.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';


export default function Nav() {

const [isScrolled, setIsScrolled] = useState(true);
const [currentLink, setCurrentLink] = useState(0);

const links = ['Home','About','Menu', 'Specials','Events','Chefs','Gallery','Contact']

useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 100) {
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

const handleClick = (index, sectionId) => {
    setCurrentLink(index)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToBooking = () => {
    const menuSection = document.getElementById('booking');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                <button onClick={() => scrollToBooking('booking')}>Book a table</button>
            </div>
        </div>
        <div className={`nav__lower ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav__title'>
                <h1>Restaurantly</h1>
            </div>
            <div className='nav__list'>
                <ul className='nav__links'>
                    {links.map((link,index) => (
                        <li key={index} className={`nav__links-link ${currentLink === index ? 'active' : ''}`} onClick={() => handleClick(index,link.toLowerCase())}>{link}</li>
                    ))}        
                </ul>
            </div>
        </div>
    </div>
  )
}

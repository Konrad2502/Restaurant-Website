import React, { useEffect, useState } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';


function Footer() {

    const [showButton, setShowButton] = useState(false);

    const scrollTotop  = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    const handleScroll = () => {
        if(window.scrollY > 300) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="footer__items">
                <div className="footer__item">
                    <div className="footer__item-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="footer__item-content">
                        <h5 className='footer__item-header'>Address</h5>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item-icon">
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="footer__item-content">
                        <h5 className='footer__item-header'>Contact</h5>
                        <p><span>Phone:</span> +1 5589 55488 55</p>
                        <p><span>Email: </span>info@example.com</p>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item-icon">
                    <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="footer__item-content">
                        <h5 className='footer__item-header'>Opening Hours</h5>
                        <p><span>Mon-Sat:</span> 11AM - 23PM</p>
                        <p><span>Sunday:</span> Closed</p>
                    </div>
                </div>
                <div className="footer__item footer__item--socials">
                    <h5 className='footer__item-header'>Follow Us</h5>
                    <div className="footer__media">
                        <FontAwesomeIcon className='footer__media-icon  ' icon={faXTwitter} />
                        <FontAwesomeIcon  className='footer__media-icon' icon={faFacebook} />
                        <FontAwesomeIcon  className='footer__media-icon' icon={faInstagram} />
                        <FontAwesomeIcon  className='footer__media-icon' icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>
              <div  
              className={`return__button ${showButton ? 'show' : ''}`}
              onClick={scrollTotop}
              >
              <FontAwesomeIcon  icon={faArrowUp} />
          </div>
      
    </div>
  )
}

export default Footer
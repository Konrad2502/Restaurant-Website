import React from 'react';
import './Chefs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Chefs() {
  return (
    <div id='chefs' className='chefs'>
        <div className='chefs__header'>
            <div className='chefs__header-top'>CHEFS</div>
            <div className='chefs__header-bottom'>
                <h3>Our Professional <span>Chefs</span></h3>
            </div>
        </div>
        <div className='chefs__items'>
            <div className='chefs__item'>
                <img className='chefs__item-image' src='./assets/images/chefs/chefs-1.jpg' alt='1'></img>
                <div className='chefs__item-content'>
                    <h5>Walter White</h5>
                    <p>Master Chef</p>
                    <div className='chefs__socials'>
                        <FontAwesomeIcon className='chefs__socials-icon' icon={faXTwitter} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faFacebook} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faInstagram} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faLinkedin} />
                    </div>
                </div>
            </div>
            <div className='chefs__item'>
                <img className='chefs__item-image' src='./assets/images/chefs/chefs-2.jpg' alt='2'></img>
                <div className='chefs__item-content'>
                    <h5>Sara Johnson</h5>
                    <p>Patissier</p>
                    <div className='chefs__socials'>
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faXTwitter} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faFacebook} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faInstagram} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faLinkedin} />
                    </div>
                </div>
            </div>
            <div className='chefs__item'>
                <img className='chefs__item-image' src='./assets/images/chefs/chefs-3.jpg' alt='3'></img>
                <div className='chefs__item-content'>
                    <h5>William Anderson</h5>
                    <p>Cook</p>
                    <div className='chefs__socials'>
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faXTwitter} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faFacebook} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faInstagram} />
                        <FontAwesomeIcon  className='chefs__socials-icon' icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Advert.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';



function Advert() {
  return (
    <div id='about' className='advert'>
      <div className="advert__wrapper">
        <div className='advert__image'>
            <img src='./assets/images/about.jpg' alt='advert-image'></img >
            <button className='play-button'><FontAwesomeIcon icon={faPlay} /></button>
        </div>
        <div className='advert__content'>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='advert__marks'>
                <div className='mark'>
                <FontAwesomeIcon className='advert-icon' icon={faCheckDouble} />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='mark'>
                <FontAwesomeIcon  className='advert-icon'  icon={faCheckDouble} />
                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
                <div className='mark'>
                <FontAwesomeIcon  className='advert-icon'  icon={faCheckDouble} />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu .</p>
                </div>
            </div>
            <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
        </div>
        </div>
    </div>
  )
}

export default Advert
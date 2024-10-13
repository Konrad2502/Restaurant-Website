import React, { useState } from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

function Contact() {

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    })

    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        (console.log(`Wyslano`, contactData));
        setContactData({
            name: '',
            email: '',
            subject: '',
            text: ''
        })
    }
  return (
    <div id='contact' className='contact'>
        <div className='contact__header'>
            <div className='contact__header-top'>CONTACT</div>
            <div className='contact__header-bottom'>
                <h3>Check our <span>Contact</span></h3> 
            </div>
        </div>
        <div className='contact__container'>
            <div className='contact__info'>
                <div className='contact__text'>
                    <h4 className='contact__text-header'>Get in touch</h4>
                    <p className='contact__text-description'>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>
                </div>
                    <div className='contact__details'>
                        <div className='contact__description'>
                            <FontAwesomeIcon className='contact__description-icon' icon={faLocationDot} />
                            <div className='contact__description-txt'>
                                <h5>Location</h5>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className='contact__description'>
                            <FontAwesomeIcon className='contact__description-icon' icon={faEnvelope} />
                            <div className='contact__description-txt'>
                                <h5>Email:</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className='contact__description'>
                            <FontAwesomeIcon className='contact__description-icon' icon={faPhone} />
                            <div className='contact__description-txt'>
                                <h5>Call:</h5>
                                <p> +1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='contact__form'>
                <form className='contact__inputs'onSubmit={handleSubmit}>
                    <div className='contact__inputs-horizontal'>
                        <input
                        type='text'
                        placeholder='Your name'
                        name='name'
                        value={contactData.name}
                        onChange={handleChange}
                        required
                        />
                        <input
                        type='email'
                        placeholder='Your email'
                        name='email'
                        value={contactData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <input
                    type='text'
                    placeholder='Subject'
                    name='subject'
                    value={contactData.subject}
                    onChange={handleChange}
                    required
                    />
                    <textarea
                    name='text'
                    value={contactData.text}
                    placeholder='Message'
                    onChange={handleChange}
                    required
                    />
                    <div className='contact__inputs-button'>
                        <button type='submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
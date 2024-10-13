import React, { useState } from 'react'
import './Booking.scss';

function Booking() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        numberOfPeople: 1,
        comments: ''
    })

    const handleChange = (e) => {
        setFormData(
            {...formData,
                [e.target.name]: e.target.value,
            }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Wyslano formularz', formData)
    }
  return (
    <div id='booking' className='booking'>
        <div className='booking__header'>
            <div className='booking__header-top'>BOOK A TABLE</div>
            <div className='booking__header-bottom'>
                <h3>Book a <span>Table</span></h3>
            </div>
        </div>
        <div className='booking__form'>
            <div className='booking__img'>
                <img src='./assets/images/reservation.jpg' alt='reservation'></img>
            </div>
            <form className='booking__inputs' onSubmit={handleSubmit}>
                <div className='booking__inputs-input'>
                    <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    required
                    />
                     <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    required
                    />
                     <input 
                    type='tel'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='Your Phone'
                    required
                    />
                     <input 
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    required
                    />
                     <input 
                    type='time'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                    required
                    />
                     <input 
                    type='number'
                    name='numberOfPeople'
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    placeholder='# of people'
                    min='1'
                    required
                    />
                </div>
                <div className='booking__inputs-textarea'>
                    <textarea
                    name='comments'
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder='Message'
                    />
                </div>
                <div className='booking__inputs-button'>
                    <button type='submit'>Book a Table</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Booking;
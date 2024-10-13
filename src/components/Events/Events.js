import React, { useState, useEffect } from 'react';
import './Events.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0); // Przechowujemy aktualny slajd
 
  const events = [
    {
      title: 'Birthday parties',
      price: '$189',
      text: 'Lorem ipsum dolor sit amet. Et aspernatur quasi ut recusandae doloribus vel soluta voluptatem hic incidunt fugiat.',
      image: './assets/images/events-slider/events-slider-1.jpg',
      description: 'Eos quaerat soluta id nihil repellendus id magni nesciunt aut veritatis incidunt et amet perspiciatis.',
    },
    {
      title: 'Private parties',
      price: '$290',
      text: 'Lorem ipsum dolor sit amet. Et aspernatur quasi ut recusandae doloribus vel soluta voluptatem hic incidunt fugiat.',
      image: './assets/images/events-slider/events-slider-2.jpg',
      description: 'Eos quaerat soluta id nihil repellendus id magni nesciunt aut veritatis incidunt et amet perspiciatis.',
    },
    {
      title: 'Custom parties',
      price: '$99',
      text: 'Lorem ipsum dolor sit amet. Et aspernatur quasi ut recusandae doloribus vel soluta voluptatem hic incidunt fugiat.',
      image: './assets/images/events-slider/events-slider-3.jpg',
      description: 'Eos quaerat soluta id nihil repellendus id magni nesciunt aut veritatis incidunt et amet perspiciatis.',
    },
  ];

  
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length); 
    }, 7000); 

    return () => clearInterval(interval);
  }, [events.length]);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index); 
  };

  const getTranslateValue = (index) => {
    if (index === currentIndex) {
      return 'translateX(0)'; 
    } else if (index < currentIndex) {
      return 'translateX(100%)'; 
    } else {
      return 'translateX(100%)'; 
    }
  };

  return (
    <div id='events' className='events'>
      <div className='events__background'>
        <img src='./assets/images/events-bg.jpg' alt='background-image'></img>
      </div>
      <div className='events__wrapper'>
        <div className='events__list'>
          {events.map((event, index) => (
            <div
              key={index}
              className={`events__item ${index === currentIndex ? 'active' : ''}`}
              style={{
                transform: getTranslateValue(index),
                transition: 'transform 0.6s ease-in-out',
              }}
            >
              <div className='events__item-img'>
                <img src={event.image} alt={event.title}></img>
              </div>
              <div className='events__content'>
                <h3 className='events__content-title'>{event.title}</h3>
                <div className='events__content-price'>{event.price}</div>
                <p className='events__content-text'>{event.text}</p>
                <div className='events__items'>
                  <div className='events__items-item'>
                    <FontAwesomeIcon icon={faCircleCheck} className='icon' />
                    <p>Eum mollitia modi nam Quis molestiae est ullam incidunt.</p>
                  </div>
                  <div className='events__items-item'>
                    <FontAwesomeIcon icon={faCircleCheck} className='icon' />
                    <p>Eum perspiciatis deserunt aut cupiditate ipsam ut voluptatibus consectetur.</p>
                  </div>
                  <div className='events__items-item'>
                    <FontAwesomeIcon icon={faCircleCheck} className='icon' />
                    <p>Ut architecto blanditiis sit tempora eius quo voluptatibus.</p>
                  </div>
                </div>
                <p className='events-content-description'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paginacja */}
      <div className='events__pagination'>
        {events.map((_, index) => (
          <div
            key={index}
            className={`events__pagination-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handlePaginationClick(index)}
          ></div>
        ))}
      </div>
    </div>

  );
}

export default Events;


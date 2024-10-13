import React, { useState,useEffect } from 'react'
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const sliderData = [
    {
      image: './assets/images/hero-carousel/hero-carousel-1.jpg',
      title: '<span>Delicious</span> Restaurant',
      text: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.',
    },
    {
      image: './assets/images/hero-carousel/hero-carousel-2.jpg',
      title: 'Temporibus autem quibusdam',
      text: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      image: './assets/images/hero-carousel/hero-carousel-3.jpg',
      title: 'At vero eos et accusamus',
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.',
    },
  ];

function Header() {
 
const [currentSlide, setCurrentSlide] = useState(0);
const [isAutoSliding, setIsAutoSliding] = useState(true);
const [slideTimeout, setSlideTimeout] = useState(null); 

useEffect(() => {
  let intervalId;
  if (isAutoSliding) {
      intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
      }, 7000); 
  }

  return () => clearInterval(intervalId);
}, [isAutoSliding]);


const resetAutoSlide = () => {
  setIsAutoSliding(false);  
  if (slideTimeout) {
      clearTimeout(slideTimeout);  

  const newTimeout = setTimeout(() => {
      setIsAutoSliding(true);  
  }, 10000); 

  setSlideTimeout(newTimeout);  
};
}

const handleNextSlide = () => {
  resetAutoSlide();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    
   
};
const handlePrevSlide = () => {
  resetAutoSlide()
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
}
   
const handleDotClick = (index) => {
  resetAutoSlide()
    setCurrentSlide(index)
  };
  const scrollToSection = (section) => {
    const menuSection = document.getElementById(section);
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  return (
    <div id='home' className='header'>
    {sliderData.map((slide, index) => (
      <div className={`header__container ${index === currentSlide ? 'active' : ''}`} key={index}>
        <img 
          key={index}
          className='header__image ' 
          src={slide.image}  
          alt={`Slide ${index}`} 
        />
        <div  className={`header__content ${index === currentSlide ? 'slide-in' : ''}`}>
          <div className="header__content-title">
            <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
          </div>
          <div className="header__content-text">
            <p>{slide.text}</p>
          </div>
          <div key={index} className="header__content-buttons">
            <button onClick={() => scrollToSection('menu')} >Our Menu</button>
            <button onClick={() => scrollToSection('booking')}>Book a table</button>
          </div>
        </div>
      </div>
    ))}
    <span className='arrow-left' onClick={handlePrevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </span>
    <span className='arrow-right' onClick={handleNextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
    <div className='carousel'>
      {sliderData.map((_, index) => (
        <span
          key={index}
          className={`carousel__dot ${index === currentSlide ? 'carousel__dot--active' : ''}`}
          onClick={() => handleDotClick(index)}
        ></span>
      ))}
    </div>
  </div>
  )
}

export default Header;
import React from 'react';
import './Testimonials.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {

    const testimonials = [
        {
            id: 1,
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante enim. Donec lobortis euismod leo quis vulputate. Phasellus consectetur turpis nec velit malesuada, non tempus ligula aliquet. Phasellus ac vulputate risus, ac eleifend sapien."',
            name: 'Paul Goodman',
            img: './assets/images/testimonials/testimonials-1.jpg',
            profession: 'Ceo & Founder'   
        },
        {
            id: 2,
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante enim. Donec lobortis euismod leo quis vulputate. Phasellus consectetur turpis nec velit malesuada, non tempus ligula aliquet. Phasellus ac vulputate risus, ac eleifend sapien."',
            name: 'Jena Karlis',
            img: './assets/images/testimonials/testimonials-2.jpg',
            profession: 'Store Owner'   
        },
        {
            id: 3,
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante enim. Donec lobortis euismod leo quis vulputate. Phasellus consectetur turpis nec velit malesuada, non tempus ligula aliquet. Phasellus ac vulputate risus, ac eleifend sapien."',
            name: 'Matt Brandon',
            img: './assets/images/testimonials/testimonials-3.jpg',
            profession: 'Freelancer'   
        },
        {
            id: 4,
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante enim. Donec lobortis euismod leo quis vulputate. Phasellus consectetur turpis nec velit malesuada, non tempus ligula aliquet. Phasellus ac vulputate risus, ac eleifend sapien."',
            name: 'John Larson',
            img: './assets/images/testimonials/testimonials-4.jpg',
            profession: 'Entrepreneur'   
        },
        {
            id: 5,
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet ante enim. Donec lobortis euismod leo quis vulputate. Phasellus consectetur turpis nec velit malesuada, non tempus ligula aliquet. Phasellus ac vulputate risus, ac eleifend sapien."',
            name: 'Sara Wilson',
            img: './assets/images/testimonials/testimonials-5.jpg',
            profession: 'Designer'   
         },   

    ]

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <span className={className} style={{ ...style, display: "block", right: "-40px",  }} onClick={onClick}>
            
          </span>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <span className={className} style={{ ...style, display: "block", left: "-40px" }} onClick={onClick}>
          
          </span>
        );
      } 


      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1340, 
                settings: {
                    slidesToShow: 1,  
                    slidesToScroll: 1,
                    
                }
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
  return (
    <div className='testimonials'>
        <img className='testimonials__background' src='./assets/images/testimonials-bg.jpg' alt='background'></img>
        <Slider {...settings} className='testimonials__container'>
            {testimonials.map((item, index) => (
                 <div className='testimonials__item' key={item.id}>
                 <div className='testimonials__item-description'>
                     <p>{item.text}</p>
                 </div>
                 <div className='testimonials__item-person'>
                     <img src={item.img} alt={item.id}></img>
                     <h5>{item.name}</h5>
                     <p>{item.profession}</p>
                 </div>
             </div>
            ))}
            
        </Slider>     
    </div>
    
  )
}

export default Testimonials
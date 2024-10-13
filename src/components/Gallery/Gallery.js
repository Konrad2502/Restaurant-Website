import React, { useState } from 'react';
import './Gallery.scss';

function Gallery() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModelOpen, setIsModelOpen] = useState(false);

    const images = [
        {
            id: 1,
            src: './assets/images/gallery/gallery-1.jpg'
        },
        {
            id: 2,
            src: './assets/images/gallery/gallery-2.jpg'
        },
        {
            id: 3,
            src: './assets/images/gallery/gallery-3.jpg'
        },
        {
            id: 4,
            src: './assets/images/gallery/gallery-4.jpg'
        },
        {
            id: 5,
            src: './assets/images/gallery/gallery-5.jpg'
        },
        {
            id: 6,
            src: './assets/images/gallery/gallery-6.jpg'
        },
        {
            id: 7,
            src: './assets/images/gallery/gallery-7.jpg'
        },
        {
            id: 8,
            src: './assets/images/gallery/gallery-8.jpg'
        }
    ]

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModelOpen(true);
    }

    const closeModal = () => {
        setIsModelOpen(false);
    }

    const nextImage = () => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    

  return (
    <div id='gallery' className='gallery'>
        <div className='gallery__header'>
            <div className='gallery__header-top'>GALLERY</div>
            <div className='gallery__header-bottom'>
                <h3>Some photos from <span>Our Restaurant</span></h3>
            </div>
        </div>
        <div className='gallery__pictures'>
            {images.map((image, index) => (
                <div key={image.id} className='gallery__picture'onClick={() => openModal(index)}>
                    <img className='gallery__picture-item' src={image.src} alt={`image-${index}`}></img>
                </div>
            ))}
        </div>
            {isModelOpen && (
                <div className='modal'>
                    <div className='modal__overlay' onClick={closeModal}></div>
                    <div className='modal__content'>
                        <img className='modal__image' src={images[currentIndex].src} alt={`image-${currentIndex}`}></img>
                        <button className='modal__close' onClick={closeModal}>x</button>
                        <button className='modal__arrow modal__arrow--left' onClick={prevImage}>{'<'}</button>
                        <button className='modal__arrow modal__arrow--right' onClick={nextImage}>{'>'}</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Gallery
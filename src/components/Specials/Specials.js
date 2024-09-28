import React, { useState } from 'react';
import './Specials.scss';
import './specialsData';
import specialsData from './specialsData';

export default function Specials() {

    const [specials] = useState(specialsData);
    const [activeCategory, setActiveCategory] = useState(specialsData[0].category);

    const specialsCategory = [...new Set(specials.map(special => special.category))];

    const filteredSpecials = specials.filter(special => special.category === activeCategory);

   const handleClickCategory = (category) => {
    setActiveCategory(category)
   }

  return (
    <div className='specials'>
        <div className='specials__header'>
            <div className='specials__header-top'>SPECIALS</div>
            <div className='specials__header-bottom'>
                <h3>Check Our <span>Specials</span></h3>
            </div>
        </div>
        <div className='specials__items'>
            <div className='specials__category'>
                {specialsCategory.map((category, index) => (
                    <div 
                    onClick={() => handleClickCategory(category)} 
                    key={index} 
                    className={`specials__category-item ${activeCategory === category ? 'active' : ''}`}>
                        <p>{category}</p>
                    </div>
                ))}
            </div>
            {filteredSpecials.map(special => (
                <div key={special.id} className='specials__item'>
                    <div className='specials__item-description'>
                        <h2 className='specials__item-title'>{special.title}</h2>
                        <p className='specials__item-text'>{special.text}</p>
                        <p className='specials__item-specification'>{special.description}</p>
                    </div>
                    <div className='specials__item-image'>
                        <img className='specials__item-img' src={special.image} alt={`image${special.id}`}></img>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

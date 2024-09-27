import React, { useState } from 'react'
import './Menu.scss';
import './menuData';
import menuData from './menuData';

export default function Menu() {

    const [menus, setMenu] = useState(menuData);
    const [activeCategory, setActiveCategory] = useState('All');
    const [transitioning, setTransitioning] = useState(false);
    console.log(menus);

    const allCategory = ['All', ...new Set(menuData.map(menu => menu.category))];
    console.log(allCategory);

    const filterMenu = (category) => {
        setTransitioning(true);
        setTimeout(() => {
            setActiveCategory(category);
            if (category === 'All') {
                setMenu(menuData);
            } else {
                const filtered = menuData.filter(menu => menu.category === category);
                setMenu(filtered);
            }
            setTransitioning(false);
        }, 500); // Czas na animację
       
    }
    
  return (
    <div className='menu-container'>
        <div className='menu'>
            <div className='menu__header'>
                <div className='menu__header-top'>MENU</div>
                <div className='menu__header-bottom'>
                    <h3>Check Our Tasty <span>Menu</span></h3>
                </div>
                <div className='menu__header-categories'>
                    {allCategory.map((category,index) => (
                        <span 
                        key={index} 
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => filterMenu(category)}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                    ))}
                </div>
                <div className='menu__items'>
                {menus.map(menu => (
                    <div key={menu.id} className={`menu__item ${transitioning ? 'hidden' : ''}`}>
                        <div className='menu__item-image'>
                            <img src={menu.image} alt={`menu ${menu.id}`}></img>
                        </div>
                        <div className='menu__item-description'>
                            <h5>{menu.title}<span>...........................................................</span></h5>
                            <p>{menu.description}</p>
                        </div>
                        <div className='menu__item-price'>{menu.price}</div>
                    </div>
        ))}
                </div>
            </div>
        </div>
    </div>
  )
}


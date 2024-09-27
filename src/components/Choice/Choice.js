import React from 'react'
import './Choice.scss';

function Choice() {
  return (
    <div className='choice'>
        <div className='choice__header'>
            <div className='choice__header-top'>WHY US</div>
            <div className='choice__header-bottom'>
                <h3>Why choose <span>Our Restaurant</span></h3>
            </div>
        </div>
        <div className='choice__items'>
            <div className='choice__item'>
                <p className='choice__item-number'>01</p>
                <p className='choice__item-title'>Lorem ipsum</p>
                <p className='choice__item-text'>Non corporis voluptatem aut sint aspernatur eos velit earum. Aut distinctio reiciendis quo quas sint vel praesentium voluptatibus est totam magnam.</p>
            </div>
            <div className='choice__item'>
                <p className='choice__item-number'>02</p>
                <p className='choice__item-title'>Repellat Nihil</p>
                <p className='choice__item-text'>Qui magni fuga et dolores inventore sed ipsum aliquid hic vero explicabo ex adipisci eligendi aut libero dolor ea iste</p>
            </div>
            <div className='choice__item'>
            <p className='choice__item-number'>03</p>
                <p className='choice__item-title'>Ad ad velit gui</p>
                <p className='choice__item-text'>Et quos porro ea placeat perferendis rem praesentium tenetur id voluptatem cumque ex laudantium omnis ut laudantium atque et dolorem autem</p>
            </div>
        </div>
    </div>
  )
}

export default Choice;

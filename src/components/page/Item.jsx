import React from 'react';
import style from './list.module.css'
const Item = ({game , index}) => {
    return (
        <li className={style.item}>
            <div className={style.about}>
            <h2>{index+1}.{game.name}</h2>
            <p>{game.released}</p>
            </div>
            <picture className={style.image}>
                <img src={game.background_image} alt={game.name}/>
            </picture>
        </li>
    );
};

export default Item;
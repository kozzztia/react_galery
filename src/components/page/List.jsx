import React, {useEffect} from 'react';
import Error from "../error/Error";
import {useSelector} from "react-redux";
import style from "./list.module.css"
import Item from "./Item";

const List = () => {
    const games = useSelector(state => state.games);
                // console.log(pageYOffset)
    return (
        <ul className={style.list}>
            {
                games.length !== 0?
                    games.map((game,index )=> <Item
                        key={game.id}game={{...game}} index={index}/>):
                    <Error/>
            }
        </ul>
    );
};

export default List;
import React from 'react';
import style from './input.module.css'
import {getInputAction} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getSearchedGamesApi} from "../api/api";
const Input = ({genre}) => {
    const inputValue = useSelector(state => state.inputValue)
    const dispatch = useDispatch();
    const setSearchedGames =(e) =>{
        e.preventDefault()
        getSearchedGamesApi(dispatch , genre , inputValue);
        dispatch(getInputAction(""))
    }
    return (
        <form className={style.searchContainer}
            onSubmit={(e)=> setSearchedGames(e)}
        >
            <input className={style.searchInput} type="text"
                   onChange={(e) => dispatch(getInputAction(e.target.value))}
                   value={inputValue}
            />
            <button className={style.btn}>
                <img src="https://static.thenounproject.com/png/424965-200.png" alt="search"/>
            </button>
        </form>
    );
};

export default Input;
import React from 'react';
import {useDispatch} from "react-redux";
import {getNextGamesApi} from "../api/api";
import style from './btn.module.css'

const NextPageBtn = (props) => {

    const dispatch = useDispatch();
    return (
        <button
            className={style.btn}
            onClick={()=>getNextGamesApi(dispatch , props.link)}
            disabled={props.link === null?true:false}
        >
        more games
        </button>
    );
};

export default NextPageBtn;
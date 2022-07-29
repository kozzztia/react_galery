import React, {useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {getGenresFromApi} from "../api/api";
import styles from './navigation.module.css'


const Navigation = () => {
    const dispatch =useDispatch()
    const genres = useSelector(state => state.genres);
    useEffect(()=>{
        getGenresFromApi(dispatch)
    },[])

    return (
        <div className={styles.list}>
            {genres.map(genre => <NavLink
                className={styles.link}
                key={genre.id}
                to={`/${genre.name.split(" ").join("")}`}>
                <p>{genre.name}</p>

            </NavLink>)}

        </div>
    );
};

export default Navigation;
import React, {useEffect}from 'react';
import {useLocation} from "react-router-dom";
import {getGamesFromApiThunk} from "../../api/api";
import {useDispatch ,useSelector} from "react-redux";
import List from "./List";
import Input from "../../UI/Input";
import NextPageBtn from "../../UI/NextPageBtn";

const Page = ({props}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const nextLink = useSelector(state => state.nextLink);
    const games = useSelector(state => state.games);
    // const scrollFunk = ()=>{
    //     const documentRect = document.documentElement.getBoundingClientRect();
    //     if(documentRect.bottom < document.documentElement.clientHeight + 150){
    //         getNextGamesApi(dispatch , nextLink)
    //     }
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll' , ()=> scrollFunk());
    //
    //     return
    //     window.removeEventListener('scroll' ,()=>  scrollFunk());
    // },[games])



    useEffect(()=>{
        const genreName = props.name;
        getGamesFromApiThunk(dispatch , genreName);


    },[location])

    return (
        <div>
            <h1>{props.name}</h1>
            <Input genre = {props.name}/>
            <List/>
            <div >
                {/*<NavLink to='/'>Main</NavLink>*/}
                <NextPageBtn link={nextLink}/>
            </div>

        </div>
    );
};

export default Page;
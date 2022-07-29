import {
    getGenresAction,
    getNextAndSearchThunk, getNextGamesThunk, getGamesThunk,
} from "../store/store";
import axios from "axios";
export const getGenresFromApi = (dispatch) =>{

    axios.get('https://api.rawg.io/api/genres', {
        params:{
            key: "3719d7855af54634ad3aa19763652ea2",

        }
    })
        .then(response => dispatch(getGenresAction(response.data.results)))


}
export const getGamesFromApiThunk = (dispatch , genreName) =>{
    axios.get('https://api.rawg.io/api/games', {
        params:{
            key: "3719d7855af54634ad3aa19763652ea2",
            genres: genreName.split(" ").join("").toLowerCase()
        }
    })
        .then(response => dispatch(getGamesThunk(response)))
}






export const getSearchedGamesApi = (dispatch , genreName , inputValue) =>{
    axios.get('https://api.rawg.io/api/games', {
        params:{
            key: "3719d7855af54634ad3aa19763652ea2",
            genres: genreName.split(" ").join("").toLowerCase(),
            search : inputValue,
        }
    })
        .then(response => dispatch(getNextAndSearchThunk(response)),
)};



export const getNextGamesApi = (dispatch , nextLink) =>{
    axios.get(nextLink)
        .then(response => dispatch(getNextGamesThunk(response)),
)};






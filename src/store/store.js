
import {applyMiddleware , legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {GET_GENRES ,GET_GAMES, GET_INPUT_VALUE, GET_SEARCHED_GAMES , GET_NEXT_LINK , GET_NEXT_GAMES } from './consts';
import thunk from 'redux-thunk';



const initialStore = {
    inputValue: "",
    genres: [],
    games: [],
    nextLink: "",

}

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genres: [...action.payload],
            }
        case GET_GAMES:
            return {
                ...state,
                games: [...action.payload],
            }
        case GET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload,
            }
        case GET_SEARCHED_GAMES:
            return {
                ...state,
                games: [...action.payload],
            }
        case GET_NEXT_LINK:
            return {
                ...state,
                nextLink: action.payload,
            };

            case GET_NEXT_GAMES:
            return {
                ...state,
                games:[...state.games ,...action.payload],
            };
        default:
            return state
    }
}



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const getGenresAction = (payload) => ({ type: GET_GENRES, payload});
export const getGamesAction = (payload) => ({ type: GET_GAMES, payload});
export const getInputAction = (payload) => ({ type: GET_INPUT_VALUE, payload});
export const getSearchedGamesAction = (payload) => ({ type: GET_SEARCHED_GAMES, payload});
export const getNextLinkAction = (payload) => ({ type: GET_NEXT_LINK, payload});
export const getNextGamesAction = (payload) => ({ type: GET_NEXT_GAMES, payload});



export const getGamesThunk = (response) => (dispatch) => {
    dispatch(getGamesAction(response.data.results));
    dispatch(getNextLinkAction(response.data.next));


};

export const getNextAndSearchThunk = (response) => (dispatch) => {
    dispatch(getSearchedGamesAction(response.data.results));
    dispatch(getNextLinkAction(response.data.next));



};
export const getNextGamesThunk = (response) => (dispatch) => {
    dispatch(getNextGamesAction(response.data.results));
    dispatch(getNextLinkAction(response.data.next));
};
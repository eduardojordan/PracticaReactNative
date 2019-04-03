import * as types from "./types"
import * as api from "../../webservices"


function updateMoviesList(list, total){
    return {
        type: types.MOVIES_UPDATE_LIST,
        list: list,
        total: total 
    }
}

function updateFetching(value){
    return{
        type: types.MOVIES_UPDATE_FETCHING,
        value
    }
}

export function fetchMoviesList() {
    return function(dispatch, getState) {
     dispatch(updateFetching(true))
        api
        .fetchMovies()
        .then( res => {
            const list = res.data.results ;
            const total = res.data.total_pages;
            dispatch(updateMoviesList(list, total))
        })
        .catch(err => {
            console.error("fetchMovies err:", err)
           
        })
       .finally(() => dispatch(updateFetching(false)))

    }
}
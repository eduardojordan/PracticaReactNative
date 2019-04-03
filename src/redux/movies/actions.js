import * as types from "./types"
import * as api from "../../webservices"


function updateMoviesList(list, total){
    return {
        type: types.MOVIES_UPDATE_LIST,
        list: list,
        total: total 
    }
}

export function fetchMoviesList() {
 console.log("FUERA DE THUNK")
    return function(dispatch, getState) {
        console.log("DENTRO DE THUNK")
        api
        .fetchMovies()
        .then( res => {
            console.log("RESPUESTA DE API",res)
            const list = res.data.results ;
            const total = res.data.total_pages;
            dispatch(updateMoviesList(list, total))
        })
        .catch(err => {
            console.error("fetchMovies err:", err)
           
        })

    }
}
import * as types from './types'
import * as api from "../../webservices"

function updateList() {
    return {
        type: types.DETAILS_UPDATE_LIST,
        list,
        total
    }
}

function updateFetching(value){
    return{
        type: types.DETAILS_UPDATE_FETCHING,
        value: value
    }
}

export function fetchDetailsList(){
    return function (dispatch, getState){
        dispatch(updateFetching(true))
    }
}
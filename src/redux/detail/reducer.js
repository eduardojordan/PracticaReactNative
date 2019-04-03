import * as types from './types'

const initialState = {
    list: [],
    total: 0 ,
    isFetching: false
}

export default function(state = initialState, action={}) {
    switch(action.type){
        case types.CHARACTERS_UPDATE_LIST:
        return {
            ...state,
            list:action.list,
            total:action.total
        }
        case types.DETAILS_UPDATE_FETCHING:
        return {
            ...state,
            isFetching: action.value
        }
        default:
        return state
    }

}

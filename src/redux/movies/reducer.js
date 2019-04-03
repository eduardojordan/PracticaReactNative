import * as types from './types'

const initialState = {
    list:[],
    total: 0,
    isFetching: false
}

export default function reducer (state = initialState, action = {}){
    console.log("REDUCER ACTION TYPE", action.type)
    switch (action.type){
        
        case types.MOVIES_UPDATE_LIST:
        console.log("ACTION:LIST", action.list)
        return {
            ...state,
            list: action.list,
            total: action.total
        }

      case types.MOVIES_UPDATE_FETCHING:
      return {
          ...state,
          isFetching: action.value
      }
        default:
        return state
    }
}
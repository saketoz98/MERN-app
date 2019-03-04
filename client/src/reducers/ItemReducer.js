import * as actionTypes from '../actions/types';

const initialState = {
    items: [],
    loading : true
}

const itemReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items : action.payload,
                loading:false
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items : [action.item,...state.items]
            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items : state.items.filter(item => item._id !== action.id)
            }
        case actionTypes.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default :
            return state;
    }
}

export default itemReducer;
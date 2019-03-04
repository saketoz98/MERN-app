import * as actionTypes from './types';
import axios from 'axios';

export const  getItems =  ()=>{
    return dispatch=>{
        dispatch(setItemsLoading());
        axios.get('/items')
            .then(res=>{
                return dispatch({
                    type : actionTypes.GET_ITEMS,
                    payload : res.data
                }
            )});
    }
}

export const  deleteItem = (id)=>{
    return dispatch=>{
        axios.delete(`/items/${id}`).then(res=>{
            dispatch({
                type:actionTypes.DELETE_ITEM,
                id : id
            }
        )})
    }    
}

export const addItem = (item)=>{
    return dispatch=>{
        axios.post('/items', item).then(res =>
            dispatch({
              type: actionTypes.ADD_ITEM,
              item: res.data
            })
          ).catch(e=>{
              console.log("error adding",e);
              
          })
    }
}

export const  setItemsLoading = ()=>{
    return{
        type : actionTypes.ITEMS_LOADING
    }
}

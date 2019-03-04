import * as actionTypes from './types';
import axios from 'axios';

export const  getItems =  ()=>{
    return  (dispatch)=>{
        dispatch(setItemsLoading());
        const res = axios.get('/items')
            .then(res=>{
                return {
                    type : actionTypes.GET_ITEMS,
                    payload : res.data
                }
            }).catch(e=>{
                console.log(e);
                
            })
        
    }
}

export const  deleteItem = (id)=>{
    return dispatch=>{
        axios.delete(`/items/{id}`).then(res=>{
            return{
                type:actionTypes.DELETE_ITEM,
                id : id
            }
        })
    }    
}

export const  addItem = (item)=>{
    return dispatch=>{
        axios.post('/items',item)
            .then(res=>{
                return{
                    type: actionTypes.ADD_ITEM,
                    item : res.data
                }
            })
    }
}

export const  setItemsLoading = ()=>{
    return{
        type : actionTypes.ITEMS_LOADING
    }
}

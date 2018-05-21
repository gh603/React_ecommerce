import {ReduceStore} from 'flux/utils'; 
import Dispatcher from '../dispatcher/Dispatcher'; 

import ItemRecord from '../record/ItemRecord'; 
import Immutable from 'immutable'; 
import ActionTypes from '../actions/actionTypes'; 

class ItemsStore extends ReduceStore {
    constructor(){
        super(Dispatcher); 
    }

    getInitialState(){
        return Immutable.List(); 
    }

    reduce(state, action){
        switch(action.type){
            case ActionTypes.ITEMS_LOADED: 
                let newState = state; 
                for(let i = 0; i < action.items.length; i++){
                    newState = newState.push(action.items[i]); 
                }
                return newState; 
            case ActionTypes.ITEMS_ERROR: 
                return state; 
            default: return state; 
        }
    }
}

export default new ItemsStore(); 
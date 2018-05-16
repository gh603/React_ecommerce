import {ReduceStore} from 'flux/utils'; 
import Dispatcher from '../dispatcher/Dispatcher'; 
import ActionTypes from '../actions/actionTypes'; 
import LoginRecord from '../record/LoginRecord'; 

class LayoutStore extends ReduceStore{
    constructor(){
        super(Dispatcher); 
    }

    getInitialState(){
        return new LoginRecord(); 
    }

    reduce(state, action){
        switch(action.type){
            case ActionTypes.AUTH_START: {
                return state.set('loading', true); 
            }
            default: return state; 
        }
    }
}

export default new LayoutStore(); 
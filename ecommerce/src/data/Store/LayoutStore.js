import {ReduceStore} from 'flux/utils'; 
import Dispatcher from '../Dispatcher/Dispatcher'; 
import Immutable from 'immutable'; 

class LayoutStore extends ReduceStore{
    constructor(){
        super(Dispatcher); 
    }

    getInitialState(){
        return Immutable.Map(); 
    }

    reduce(state, action){
        switch(action.type){
            default: return state; 
        }
    }
}

export default new LayoutStore(); 
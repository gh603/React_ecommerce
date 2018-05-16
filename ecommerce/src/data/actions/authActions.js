import ActionTypes from './actionTypes'; 
import Dispatcher from '../dispatcher/Dispatcher'; 

const Actions = {
    startAuth() {
        Dispatcher.dispatch({
            type: ActionTypes.AUTH_START, 
        })
    }, 
}
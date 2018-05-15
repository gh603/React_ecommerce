import Immutable from 'immutable'; 

const loginRecord = Immutable.Record({
    id: '', 
    isLoggedIn: false, 
    isManager: false, 
}); 

export default loginRecord; 
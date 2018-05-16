import {Container} from 'flux/utils'; 
import Layout from '../components/Layout/Layout'; 
import LayoutStore from '../data/store/LayoutStore'; 

function getStores(){
    return [LayoutStore]; 
}

function calculateState(){
    return {
        isAuth: LayoutStore.getState().get("idToken") !== null, 
        isManager: LayoutStore.getState().get('isManager'),
    }; 
}

export default Container.createFunctional(Layout, getStores, calculateState); 
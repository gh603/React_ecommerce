import {Container} from 'flux/utils'; 
import Layout from '../components/Layout/Layout'; 
import LayoutStore from '../data/Store/LayoutStore'; 

getStores = () => {
    return [LayoutStore]; 
}

calculateState = () => {
    return {}; 
}

export default Container.createFunctional(Layout, getStores, calculateState); 
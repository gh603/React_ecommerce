import React, { Component } from 'react'
import {Container} from 'flux/utils'; 

import ItemsStore from '../data/store/ItemStore'; 
import Items from '../components/Items/Items'; 

class ItemsContainer extends Component{
    static getStores(){
        return [ItemsStore]; 
    }

    static calculateState(){
        return {
            items: ItemsStore.getState()
        }
    }

    render(){
        return <Items {...this.state}/>
    }
}

export default Container.create(ItemsContainer); 
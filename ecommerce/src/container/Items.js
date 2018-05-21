import React, { Component } from 'react'
import {Container} from 'flux/utils'; 

import ItemsStore from '../data/store/ItemStore'; 
import Items from '../components/Items/Items'; 
import ItemDataManager from '../data_managers/ItemDataManager'; 

class ItemsContainer extends Component{
    constructor(){
        ItemDataManager.loadItems(); 
        super(); 
    }

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
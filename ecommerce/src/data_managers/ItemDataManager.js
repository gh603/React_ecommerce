import ItemRecord from '../data/record/ItemRecord'; 
import Dispatcher from '../data/dispatcher/Dispatcher'; 
import RequestAPI from './RequestAPI'; 

const ItemDataManager = {
    loadItems(){
        RequestAPI.get('/items.json')
            .then(items => {
                Dispatcher.dispatch({
                    type: 'ITEMS_LOADED', 
                    items: Object.keys(items).map(key => new ItemRecord(items[key]))
                }); 
            })
            .catch(error => {
                Dispatcher.dispatch({
                    type: 'ITEMS_ERROR', 
                    error
                });
            });
    },
}; 

export default ItemDataManager; 
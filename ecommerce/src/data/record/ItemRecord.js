import Immutable from 'immutable'; 

const ItemRecord = Immutable.Record({
    isDeleted: false, 
    id: null,
    item: '', 
    description: '', 
    quantity: 1, 
    category: '', 
    price: 0,
    image: '', 
}); 

export default ItemRecord; 
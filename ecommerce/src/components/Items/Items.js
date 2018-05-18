import React from 'react';

import Item from './Item/Item';
import './Items.css'; 

const Items = (props) => {
    let items = props.items.map((item) => {
        return <Item key={item.get('id')} item={item} />;
    });

    if (items.length === 0) {
        items = "No more products to show";
    }
    return (
        <div id='content'>
            <div className='productList'>
                {items}
            </div>
        </div>
    )
}

export default Items; 

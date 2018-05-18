import React from 'react';

import "./Item.css";

const Item = (props) => {
    const item = props.item;
    return (
        <div className="card">
            <div className="card-content">
                <div className="top-bar">
                    <span>${item.get('price')}</span>
                    <div className='img'>
                        <img src={item.get('image')} alt={item.get('item')} />
                    </div>
                </div>
            </div>
            <div className="card-description">
                <div className="id">{item.get('id')}</div>
                <div className="title">{item.get('item')}</div>
                <div className="cart"><span className="glyphicon glyphicon-shopping-cart"></span></div>
                <div className="item-desc hidden">{item.get('description')}</div>
                <div className="item-qty hidden">{item.get('quantity')}</div>
            </div>
            <div className="card-footer">
                <div className="span">{item.get('category')}</div>
            </div>
        </div>
    )
}

export default Item; 

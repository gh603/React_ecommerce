import {ReduceStore} from 'flux/utils'; 
import Dispatcher from '../dispatcher/Dispatcher'; 

import ItemRecord from '../record/ItemRecord'; 
import Immutable from 'immutable'; 

class ItemsStore extends ReduceStore {
    constructor(){
        super(Dispatcher); 
    }

    getInitialState(){
        let items = [
            {
                isDeleted: false,
                id: 1,
                quantity: 1,
                item: 'Beats Headphone',
                category: 'Headphone',
                image: 'https://tctechcrunch2011.files.wordpress.com/2014/11/solo2-wireless-red-quarter.jpg?w=738',
                description: 'Immerse yourself in an emotional experience. The Solo2 has a more dynamic, wider range of sound, with a clarity that will bring you closer to what the artist intended. Whether you’re into hip-hop, heavy metal, jazz or electronic, you will feel the higher fidelity sound in your Solo2 . Take control. With the color-matched RemoteTalk cable, you can change songs, adjust the volume and even take calls, without having to reach for your device. (Compatible with iOS devices. Functionality may vary by device',
                price: 139.99
            }, 
            {
                isDeleted: false,
                id: 2, 
                quantity: 99,
                item: 'iphone8',
                category: 'Phone',
                image: 'http://farm1.static.flickr.com/886/41507422672_3ecc8d2d29.jpg',
                description: 'iPhone 8 introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless.',
                price: 599.99,
            },
            {
                isDeleted: false,
                id: 3,
                quantity: 99,
                item: 'Canon EF 75-300mm III',
                category: 'Camera Lens',
                image: 'https://www.adorama.com/images/Large/ca75300afu_2.jpg',
                description: "This Certified Refurbished product is Manufacturer refurbished, shows limited or no wear, and includes all original accessories plus a 90-day warranty EF Mount Lens Aperture Range: f/4-45 DC Autofocus Motor Minimum Focus Distance: 4.9' 58mm Filter Thread Diameter",
                price: 70.97,
            },
            {
                isDeleted: false,
                id: 4,
                quantity: 99,
                item: 'Nike Lunar Fingertrap TR',
                category: 'Shoes',
                image: 'http://farm5.static.flickr.com/4311/35352999243_ddc4db90f9.jpg',
                description: "There's no games with your training schedule when you have the comfort of the Nike Lunar Fingertrap TR! Textile upper with synthetic overlays offers a wrapped-like look. Lace-up closure for a secure, adjustable fit. Plush tongue and collar offers support. Mesh lining gives a breathable wear in shoe.Rubber outsole.",
                price: 75.99,
            },
        ]; 

        let itemsRecord = items.map(item => { return new ItemRecord(item)});  
        return Immutable.List(itemsRecord); 
    }

    reduce(state, action){
        switch(action.type){
            default: return state; 
        }
    }
}

export default new ItemsStore(); 
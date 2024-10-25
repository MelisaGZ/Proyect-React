
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


import acuarelaImg from '../assets/assets/img/acuarela-giotto.webp';
import filgoSuperBallImg from '../assets/assets/img/filgo-super-ball.webp';
import lapizRecargableImg from '../assets/assets/img/lapiz-recargable.webp';
import sharpieImg from '../assets/assets/img/marcadores-finos-sharpie1.webp';
import mochilaAutosImg from '../assets/assets/img/mochila-autos.webp';
import mochilaTalbotImg from '../assets/assets/img/mochila-talbot.webp';
import pincelesImg from '../assets/assets/img/pinceles.webp';
import resaltadorMapedImg from '../assets/assets/img/resaltador-maped.webp';
import rollerSharpieImg from '../assets/assets/img/roller-sharpie.webp';
import temperaMapedImg from '../assets/assets/img/tempera-maped-pote-x-250gr1.webp';

const ItemListContainer = () => {
const { category } = useParams();
const [items, setItems] = useState([]);


const allProducts = [
    { id: 1, name: 'Acuarela Giotto', category: 'artistica', price: '$17.960', img: acuarelaImg },
    { id: 2, name: 'Lapicera Roller Filgo', category: 'escuela', price: '$1.800', img: filgoSuperBallImg },
    { id: 3, name: 'Lapicera borrable Filgo', category: 'escuela', price: '$1.520', img: lapizRecargableImg },
    { id: 4, name: 'Marcador Permanente Sharpie', category: 'escuela', price: '$2.160', img: sharpieImg },
    { id: 5, name: 'Mochila "BatWhells"', category: 'mochilas', price: '$29.720', img: mochilaAutosImg },
    { id: 6, name: 'Mochila Espalda Talbot Wanderlust', category: 'mochilas', price: '$36.400', img: mochilaTalbotImg },
    { id: 7, name: 'Pinceles Giotto redondo', category: 'artistica', price: '$2.500', img: pincelesImg },
    { id: 8, name: 'Resaltador Maped Glitter', category: 'escuela', price: '$3.400', img: resaltadorMapedImg },
    { id: 9, name: 'Lapicera Sharpie Gel', category: 'escuela', price: '$7.620', img: rollerSharpieImg },
    { id: 10, name: 'Témpera Maped', category: 'artistica', price: '$2.380', img: temperaMapedImg },
    ];

useEffect(() => {
if (category) {
const filteredItems = allProducts.filter(item => item.category === category);
setItems(filteredItems);
} else {
setItems(allProducts); 
}
}, [category]);

return (
<div>
<h1 style={style.h1}>{category ? category.toUpperCase() : 'NUESTROS PRODUCTOS'}</h1>
<ItemList items={items} />
</div>
);
};

const style = {
    h1: {
        textDecoration: 'underline',

    }
}


export default ItemListContainer;



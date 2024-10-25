
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemsCount from './ItemsCount';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);


    const allProducts = [
      { id: 1, name: 'Acuarela', category: 'artistica', price: '$17.960', description: 'Acuarela Giotto' },
      { id: 2, name: 'Lapicera', category: 'escuela', price: '$1.800', description: 'Lapicera Roller Filgo' },
      { id: 3, name: 'Lapicera borrable Filgo', category: 'escuela', price: '$1.520' , description: 'Lapicera borrable Filgo' },
      { id: 4, name: 'Marcador Permanente Sharpie', category: 'escuela', price: '$2.160', description: 'Marcador Permanente Sharpie' },
      { id: 5, name: 'Mochila BatWhells', category: 'mochilas', price: '$29.720', description: 'Mochila "BatWhells' },
      { id: 6, name: 'Mochila Espalda Talbot Wanderlust', category: 'mochilas', price: '$36.400', description: 'Mochila Espalda Talbot Wanderlust' },
      { id: 7, name: 'Pinceles Giotto redondo', category: 'artistica', price: '$2.500', description: 'Pinceles Giotto' },
      { id: 8, name: 'Resaltador Maped Glitter', category: 'escuela', price: '$3.400' , description: 'Resaltador Maped Glitter' },
      { id: 9, name: 'Lapicera Sharpie Gel', category: 'escuela', price: '$7.620', description: 'Lapicera Sharpie Gel' },
      { id: 10, name: 'Témpera Maped', category: 'artisticas', price: '$2.380', description: 'Témpera Maped' },
      ];


  useEffect(() => {
    const foundItem = allProducts.find(product => product.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <ItemsCount />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
  };

export default ItemDetail;

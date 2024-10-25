
import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div style={styles.grid}>
      {items.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.img} alt={item.name} style={styles.image} />
          <h2 style={styles.ch2} >{item.name}</h2>
          <p>Price: {item.price}</p>
          <Link to={`/item/${item.id}`} style={styles.button}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 5fr))',
    gap: '150px',
    padding: '100px',
    justifyItems: 'center',
  },
  card: {
    overflow: 'hidden',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '10px 10px 5px -3px rgba(19,59,41,1)',
  },
  image: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '8px 10px',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  ch2: {
    color: 'red',
  }
};


export default ItemList;

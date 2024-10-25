
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
        <p style={styles.p}>Libreria Papiro</p>
        <ul style={styles.navList}>
        <li><Link style={styles.liNav} to="/">Inicio</Link></li>
        <li><Link style={styles.liNav} to="/category/escuela">Escolar</Link></li>
        <li><Link style={styles.liNav} to="/category/artistica">Artistico</Link></li>
        <li ><Link style={styles.liNav} to="/category/mochilas">Mochilas</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    height: '150px',
    background:  'linear-gradient(to right, #0f2027, #203a43, #2c5364)', 
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
  },
    navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    justifyContent: 'space-between',
  },
  liNav: {
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
  },
  p: {
    margin: '10px',
    fontSize: '30px',
    color: 'white',
  }

};

export default Navbar;

import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ title }) => {
    return (
        <nav style={navStyle}>
            <div style={titleStyle}>{title}</div>


            <ul style={ulStyle}>
                <li><a href=".." style={linkStyle}>Nosotros</a></li>
                <li><a href=".." style={linkStyle}>Artistica</a></li>
                <li><a href=".." style={linkStyle}>Libreria</a></li>
                <li><a href=".." style={linkStyle}>Contacto</a></li>
            </ul>

      {/* Widget del carrito de compras */}
        <CartWidget cantidad={3} />
    </nav>
    );
};

// Estilos en línea
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #244269, #8c99bb)',
    borderBottom: '5px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
};


const titleStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Arial',
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    };

const linkStyle = {
    color: '#011307',
    textDecoration: 'none',
    fontSize: '20px',

};





export default NavBar;

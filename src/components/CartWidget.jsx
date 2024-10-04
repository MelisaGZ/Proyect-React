import React from 'react';

const CartWidget = ({ cantidad }) => {
    return (
        <div style={cartStyle}>
        {/* Ícono de carrito de compras */}
            <img
            src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
            alt="Carrito de compras"
            style={iconStyle}
        />
            <span style={cantStyle}>{cantidad}</span>
        </div>
    );
};

// Estilos para el contenedor del carrito
const cartStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
};

// Estilos para el ícono del carrito
const iconStyle = {
    width: '30px',
    height: '30px',
};

// Estilos para la burbuja de notificación
const cantStyle = {
    position: 'absolute',
    top: '-9px',
    right: '-8px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '12px',
    fontWeight: 'bold',
};

export default CartWidget;
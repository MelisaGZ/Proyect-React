
import React, { useState } from 'react';

const ItemsCount = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={styles.counter}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const styles = {
  counter: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
};

export default ItemsCount;

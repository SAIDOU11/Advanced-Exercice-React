import { useState } from 'react';
import Product from './Product.jsx';
import productsData from './data.jsx';
import { slowCountItems } from './utils.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const productsCount = slowCountItems(productsData, 500);

  return (
    <>
      <h1>The current count is {count} </h1>
      <button className="button" onClick={decrement}>
        -
      </button>
      <button onClick={increment} className="button">
        +
      </button>{' '}
      <br />
      <br />
      <h2>There are {productsCount} products </h2>
      <div className="products-list">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;

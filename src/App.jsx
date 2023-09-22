import { useMemo, useState } from 'react';
import Product from './Product.jsx';
import productsData from './data.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

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
      <button onClick={() => setDarkMode((prev) => !prev)} className="button">
        {darkMode ? 'Light' : 'Dark'}
      </button>
      <br />
      <br />
      <div className="products-list">
        {productsData.map((product) => (
          <Product key={product.id} product={product} darkMode={darkMode} />
        ))}
      </div>
    </>
  );
};

export default App;

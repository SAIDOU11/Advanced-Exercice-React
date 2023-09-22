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

  const productStyles = useMemo(() => {
    return {
      backgroundColor: darkMode ? '#2b283a' : 'whitesmoke',
      color: darkMode ? 'white' : '#2b283a',
    };
  }, [darkMode]);

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
          <Product key={product.id} product={product} style={productStyles} />
        ))}
      </div>
    </>
  );
};

export default App;

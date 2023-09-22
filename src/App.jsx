import { useMemo, useState } from 'react';
import Product from './Product.jsx';
import productsData from './data.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // const startTime1 = Date.now();

  // const sortedProducts = [...productsData].sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );

  // const endTime1 = Date.now();
  // console.log(`Took ${endTime1 - startTime1}ms `);

  const startTime2 = Date.now();

  /**
   * Challenge: memoize the sorting calculation of sortedProducts
   * so that it only happens if the value of "sort" changes.
   *
   * Make sure to comment out the version
   * above when testing your version here
   */

  const sortedProducts = useMemo(() => {
    return [...productsData].sort((a, b) => a.name.localeCompare(b.name));
  }, [productsData]);

  const endTime2 = Date.now();
  console.log(`Took ${endTime2 - startTime2}ms`);

  const visibleProducts = sort ? sortedProducts : productsData;

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
      <button onClick={() => setSort((prev) => !prev)} className="button">
        {sort ? 'Unsort' : 'Sort'}
      </button>
      <br />
      <br />
      <div className="products-list">
        {visibleProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;

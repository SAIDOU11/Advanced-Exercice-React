import Product from './Product.jsx';
import productsData from './data.jsx';

const ProductList = () => {
  return productsData.map((product) => (
    <Product key={product.id} product={product} />
  ));
};

export default ProductList;

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <p className="truncate">{product.name}</p>{' '}
    </div>
  );
};

export default Product;

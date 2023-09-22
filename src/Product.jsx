import sleep from './utils.jsx';
import { memo } from 'react';

const Product = ({ product, style }) => {
  sleep(1);

  return (
    <div className="product-card" style={style}>
      <p className="truncate">{product.name}</p>{' '}
    </div>
  );
};

export default memo(Product);

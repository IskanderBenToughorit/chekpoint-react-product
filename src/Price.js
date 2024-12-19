import React from 'react';
import product from './product.json';

const Price = () => {
  return <p className="card-text text-success">{product.price}</p>;
};

export default Price;

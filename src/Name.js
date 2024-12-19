import React from 'react';
import product from './product.json';

const Name = () => {
  return <h2 className="card-title">{product.name}</h2>;
};

export default Name;

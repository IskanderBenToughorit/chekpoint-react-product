import React from 'react';
import product from './product.json';

const Description = () => {
  return <p className="card-text">{product.description}</p>;
};

export default Description;
import React from 'react';
import product from './product';

const Image = ({ name }) => {
  return (
    <>
      {name && ( // Vérifiez si name a une valeur
        <img 
          src={product.image} // Utilisation directe du chemin
          alt="Image du produit" 
          className="card-img-top img-fluid" 
          style={{ maxWidth: '350px', height: 'auto' }} 
        />
      )}
    </>
  );
};

export default Image;
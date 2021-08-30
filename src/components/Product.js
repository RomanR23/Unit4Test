import React from 'react';

export default function Product(props) {
  const { product, onAdd, quantityInc, quantityDec } = props;
  return (
    <div className='Each-Item'>
    <img className="small" src={product.image} alt={product.name} />
    <h3><center>{product.name}</center></h3>
    <div><center>${product.price}</center></div>
    <div>
    <button className='Quantity-' onClick={()=> quantityDec(product)}>Quantity -</button>
    <div className='QuantityCounter'><center>{product.quantity}</center></div>
    <button className='QuantityPlus' onClick={()=> quantityInc(product)}>Quantity +</button>
    <button className='AddToCart'onClick={() => onAdd(product)}>Add To Cart</button>
        
      </div>
    </div>
  );
}

import React from 'react';
import Product from './Product';

export default function Main(props) {
const { products, onAdd, quantityInc, quantityDec } = props;
return (
    <main className="Main">
    
    <div className="Selection-Area">
        {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd} quantityInc={quantityInc} quantityDec={quantityDec}></Product>
        ))}
    </div>
    </main>
);
}

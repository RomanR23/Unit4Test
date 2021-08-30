import React from 'react';

export default function Basket(props) {
const { cartItems, checkoutInc, checkoutDec, checkoutRemove, checkoutClear } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
const totalPrice = itemsPrice;
return (
    <aside className="Checkout-Area">
    <h2 className='YourCart'>Your Cart</h2>
    <div className='CheckoutItems'>
        {cartItems.length === 0 && <div className='CartEmpty'>Cart is empty</div>}

        {cartItems.map((item) => (
        <div key={item.id} className="CheckoutInd">
            <img className='CheckoutImage'src={item.image}></img>
            <div className="CheckoutName">{item.name}</div>
            <div className='CheckoutCount'>{item.quantity}</div>
            <div className="col-2">
            <button onClick={() => checkoutDec(item)} className="CheckoutDec">
                -
            </button>
            <button onClick={() => checkoutRemove(item)} className="CheckoutRemove">
                Remove
            </button>
            <button onClick={() => checkoutInc(item)} className="CheckoutInc">
                +
            </button>
            </div>

            <div className="CheckoutPrice">
            ${item.price.toFixed(2)}
            </div>
        </div>
        ))}

        
    </div>
        <>
            
            <div className="YourTotalArea">
                <div className="col-2">
                <strong className='YourTotal'>Your Total: {<strong>${totalPrice.toFixed(2)}</strong>}</strong>
                <div className="row">
                <button className='CheckoutButton'onClick={() => checkoutClear()}>
                    Checkout
                </button>
            </div>
                </div>
                
            </div>
            
           
        </>
        
    </aside>
    );
}

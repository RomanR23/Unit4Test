import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';





function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [updatedProducts, setupdatedProducts] = useState([])
  



const checkoutInc = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);

  if(exist){
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity += 1 } : x
      )
    );
  }
}

const checkoutDec = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  

  if(exist && product.quantity > 0){
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { ...exist, quantity: exist.quantity -= 1 } : x
      )
    );
  }
  if(exist && product.quantity === 0){
    let copy = cartItems;
    copy.splice(copy.indexOf(product), 1)
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? { copy } : x
      )
    );
  }
}


const checkoutClear = () => {
  setCartItems(
    []
    )
}

const checkoutRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);

  if(exist){
    let copy = cartItems;
    copy.splice(copy.indexOf(product), 1)
    console.log(copy)
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id ? {copy}  : x
      )
    );
  }
  console.log(cartItems)
}


const quantityInc = (product) => {
  product.quantity += 1
  setupdatedProducts(
    [...updatedProducts]
  )
  let button = document.getElementsByClassName('AddToCart')
  if  (product.quantity > 0){
      button[product.id].style.display='block'
      } 
  console.log(product)
}


const quantityDec = (product) => {
  if(product.quantity > 0){
    product.quantity -= 1
    setupdatedProducts(
      [...updatedProducts]
    )
  }
  let button = document.getElementsByClassName('AddToCart')

  if  (product.quantity === 0){
      button[product.id].style.display='none'
      
      } 
  console.log(product)
  
}



  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist){
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity += product.quantity } : x
        )
      );
    }

    if (exist) {

      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty += product.quantity } : x
        )
      );
    } 
    
    else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
    product.quantity = 0
    let button = document.getElementsByClassName('AddToCart')
    button[product.id].style.display='none'
  };







  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd} quantityInc={quantityInc} quantityDec={quantityDec}></Main>
        <Basket
          cartItems={cartItems}
          checkoutInc={checkoutInc}
          checkoutDec={checkoutDec}
          checkoutRemove={checkoutRemove}
          checkoutClear={checkoutClear}
        ></Basket>
      </div>
    </div>
  );
}

export default App;

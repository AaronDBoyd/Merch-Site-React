import React from 'react'
// import PropTypes from 'prop-types'
import CartItem from './CartItem';

function Cart(props) {
  const { cartList } = props;
  let totalPrice = 0
  cartList.forEach(function(i) {
    totalPrice += i.price;
  });

  let itemNames = []
  cartList.forEach(function(i) { itemNames.push(i.name)
  });

  let count = {};
  cartList.forEach(function(i) { count[i.name] = (count[i.name]||0) + 1;});
  // return array with name and count of merch

  return (
    <React.Fragment>
      <h1>- Cart -</h1>
      <h2> Total Items: {cartList.length}</h2>
      <h2> Total Price: {totalPrice}</h2> 
      <h2> names list: {itemNames}</h2>
      {/* <h2> Count: {count}</h2> */}
      {cartList.map((item) => (
        <CartItem 
          name={item.name}
          price={item.price}
        />
      ))}
    </React.Fragment>
  )
}

Cart.propTypes = {

}

export default Cart

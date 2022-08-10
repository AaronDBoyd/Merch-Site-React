import React from 'react'
// import PropTypes from 'prop-types'
import CartItem from './CartItem';

function Cart(props) {
  const { cartList } = props;

  return (
    <React.Fragment>
      <h1>- Cart -</h1>
      <h2> Total Items: {cartList.length}</h2>
      {/* <h2> Total Price: {typeof cartList}</h2>  */}
      {cartList.map((item) => (
        <CartItem 
          name={item.name}
        />
      ))}
    </React.Fragment>
  )
}

Cart.propTypes = {

}

export default Cart

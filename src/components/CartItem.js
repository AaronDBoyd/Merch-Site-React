import React from "react";
// import PropTypes from "prop-types";

function CartItem(props) {
  return (
    <React.Fragment>
      
      <h3>{props.name} - ${props.price}</h3>
    </React.Fragment>
  );
}

CartItem.propTypes = {};

export default CartItem;

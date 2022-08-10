import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  let buyButtonVisible = null;
  let buttonText = null;

  if (props.quantity > 0) {
    buyButtonVisible = (() => props.whenBuyClicked(props.id));
    buttonText = "Buy Item";
  } else {
    buttonText = "Out of Stock";
  }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}> 
        <h3>{props.name}</h3>
        <h3>${props.price}</h3>
        <h4>{props.description}</h4>
        <h4>Items Left: {props.quantity}</h4>
      </div>
      <button onClick={buyButtonVisible}>{buttonText}</button>
      <hr />
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;

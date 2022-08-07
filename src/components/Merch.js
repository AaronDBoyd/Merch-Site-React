import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.key)}> {/* will change to props.id */}
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <h4>Items Left: {props.quantity}</h4>
      </div>
      <hr />
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
};

export default Merch;

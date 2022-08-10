import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Item" />
        <br />
        <input type="number" min='1' name="price" placeholder="Price" />
        <br />
        <input type="text" name="description" placeholder="Description" />
        <br />
        <input type="number" min='1' name="quantity" placeholder="Quantity" />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;

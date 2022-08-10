import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'
import { v4 } from 'uuid'

function NewMerchForm(props) {

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h1>- Add Merch -</h1>
      <ReusableForm
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText='Add Merch'
      />
    </React.Fragment>
  )
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}

export default NewMerchForm

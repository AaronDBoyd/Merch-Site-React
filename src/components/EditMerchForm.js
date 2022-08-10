import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'


function EditMerchForm(props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({
      name: event.target.name.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: merch.id
    })
  }

  return (
    <React.Fragment>
      <h1>- Edit Merch -</h1>
      <ReusableForm 
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Merch"
      />
    </React.Fragment>
  )
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func

}

export default EditMerchForm

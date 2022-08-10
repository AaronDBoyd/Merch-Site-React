import React from 'react'
import PropTypes from 'prop-types'

function MerchDetail(props) {
  const { merch, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3> {merch.name} </h3>
      <h3> ${merch.price} </h3>
      <h4> {merch.description} </h4>
      <h4> {merch.quantity} </h4>

      <button onClick={() => props.onClickingRestock(merch.id) }>Restock</button>

      <button onClick={ props.onClickingEdit }>Update Merch</button>
      <button onClick={() => onClickingDelete(merch.id)}> Delete Merch</button>
      <hr />
    </React.Fragment>
  )
}

MerchDetail.propTypes = {
  merch: PropTypes.object
}

export default MerchDetail

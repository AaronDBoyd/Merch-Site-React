import React from 'react'
import PropTypes from 'prop-types'

function MerchDetail(props) {
  const { merch } = props;

  return (
    <React.Fragment>
      <h1> Item Detail </h1>
      <h3> {merch.name} </h3>
      <h4> {merch.description} </h4>
      <h4> {merch.quantity} </h4>
    </React.Fragment>
  )
}

MerchDetail.propTypes = {
  merch: PropTypes.object
}

export default MerchDetail

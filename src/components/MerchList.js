import React from 'react'
import PropTypes from 'prop-types'
import Merch from './Merch'

const tempMerchList = [
  {
    name: "t-shirt",
    description: "A shirt with a logo of Zara.",
    quantity: 3
  },
  {
    name: "sticker", 
    description: "A sticker with a graphic of Zara floating through space.",
    quantity: 6
  },
  {
    name: "kazoo", 
    description: "A kazoo that sounds just like Zara's singing voice.",
    quantity: 27
  }
]

function MerchList(props) {
  return (
    <React.Fragment>
      <h2>MerchList</h2>
      <hr />
      {tempMerchList.map((merch, index) =>
      <Merch name = {merch.name} description = {merch.description} key = {index} />
      )}
    </React.Fragment>
    
  )
}

MerchList.propTypes = {}

export default MerchList

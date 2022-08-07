import React, { Component } from 'react'
import MerchList from './MerchList'

export default class MerchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    }
  }

  render() {
    return (
      <React.Fragment>
        <MerchList />
      </React.Fragment>
    )
  }
}

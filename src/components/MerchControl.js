import React, { Component } from "react";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";
import NewMerchForm from "./NewMerchForm";
import EditMerchForm from "./EditMerchForm";

export default class MerchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      mainMerchList: [],
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }))
    }
  };

  handleAddingMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      formVisibleOnPage: false,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewMerchForm onNewMerchCreation={this.handleAddingMerchToList} />
      );
      buttonText = "View Merch List";
    } else {
      currentlyVisibleState = (
        <MerchList
          merchList={this.state.mainMerchList}
          onMerchSelection={this.handleChangingSelectedMerch}
        />
      );
      buttonText = "Add New Merch";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

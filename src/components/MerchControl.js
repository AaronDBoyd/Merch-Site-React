import React, { Component } from "react";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";
import NewMerchForm from "./NewMerchForm";
import EditMerchForm from "./EditMerchForm";
import Cart from "./Cart";

export default class MerchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      mainMerchList: [
        // {
        //       name: "t-shirt",
        //       description: "A shirt with a logo of Zara.",
        //       quantity: 3,
        //       price: 20
        //     },
        //     {
        //       name: "sticker",
        //       description: "A sticker with a graphic of Zara floating through space.",
        //       quantity: 6,
        //       price: 5
        //     },
      ],
      editing: false,
      mainCartList: [
        // {
        //       name: "t-shirt",
        //       description: "A shirt with a logo of Zara.",
        //       quantity: 3,
        //     },
        //     {
        //       name: "sticker",
        //       description: "A sticker with a graphic of Zara floating through space.",
        //       quantity: 6,
        //     },
      ],
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

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter(
      (merch) => merch.id === id 
    )[0];
    this.setState({ selectedMerch: selectedMerch})
  }

  handleEditClick = () => {
    this.setState({ editing: true});
  };

  handleEditingMerchInList = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList.filter(
      (merch) => merch.id !== this.state.selectedMerch.id) 
      .concat(merchToEdit);
    this.setState({
      mainMerchList: editedMainMerchList,
      editing: false,
      selectedMerch: null,
    })
  }

  handleDeletingMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(
      (merch) => merch.id !== id
    );
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null,
    })
  }

  handleBuyingMerch = (id) => {
    const selectedItem = this.state.mainMerchList.filter((merch) => merch.id === id)[0]
    selectedItem.quantity -= 1;

    const editedMainMerchList = this.state.mainMerchList.filter(
      (merch) => merch.id !== id) 
      .concat(selectedItem);

    const newMainCartList = this.state.mainCartList.concat(selectedItem);  

    this.setState({
      mainMerchList: editedMainMerchList,
      editing: false,
      selectedMerch: null,
      mainCartList: newMainCartList,
    })
  }

  handleRestockClick = (id) => {
    const selectedItem = this.state.mainMerchList.filter((merch) => merch.id === id)[0]
    selectedItem.quantity += 10;
    const editedMainMerchList = this.state.mainMerchList.filter(
      (merch) => merch.id !== id) 
      .concat(selectedItem);

    this.setState({
      mainMerchList: editedMainMerchList,
      editing: false,
      selectedMerch: null,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
      <EditMerchForm
        merch={this.state.selectedMerch}
        onEditMerch={this.handleEditingMerchInList}
      />
      buttonText = "View Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = (
        <MerchDetail
          merch={this.state.selectedMerch}
          onClickingDelete={this.handleDeletingMerch}
          onClickingEdit={this.handleEditClick}
          onClickingRestock={this.handleRestockClick}
        />
      );
      buttonText = "View Contact List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewMerchForm onNewMerchCreation={this.handleAddingMerchToList} />
      );
      buttonText = "View Merch List";
    } else {
      currentlyVisibleState = (
        <MerchList
          merchList={this.state.mainMerchList}
          onMerchSelection={this.handleChangingSelectedMerch}
          onClickingBuy={this.handleBuyingMerch}
        />
      );
      buttonText = "Add New Merch";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <button onClick={this.handleClick}>{buttonText}</button>
        <br />
        <br />
        <br />

        <Cart 
          cartList={this.state.mainCartList}
        />
      </React.Fragment>
    );
  }
}

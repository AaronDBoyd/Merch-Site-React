import React from "react";
import PropTypes from "prop-types";
import Merch from "./Merch";

// const tempMerchList = [
//   {
//     name: "t-shirt",
//     description: "A shirt with a logo of Zara.",
//     quantity: 3,
//   },
//   {
//     name: "sticker",
//     description: "A sticker with a graphic of Zara floating through space.",
//     quantity: 6,
//   },
//   {
//     name: "kazoo",
//     description: "A kazoo that sounds just like Zara's singing voice.",
//     quantity: 27,
//   },
// ];

function MerchList(props) {
  return (
    <React.Fragment>
      <h2>MerchList</h2>
      <hr />
      {props.merchList.map((merch) => (
        <Merch
          whenBuyClicked={props.onClickingBuy}
          whenMerchClicked={props.onMerchSelection}
          name={merch.name}
          description={merch.description}
          quantity={merch.quantity}
          id={merch.id}
          key={merch.id}
        />
      ))}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;

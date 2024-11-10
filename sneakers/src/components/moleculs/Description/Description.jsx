import React, { useState } from "react";
import "../../../App.css";
import MinusIcon from "../../atoms/MinusIcon/MinusIcon";
import PlusIcon from "../../atoms/PlusIcon/PlusIcon";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";

function Description() {
  const [itemsCart, setItemsCart] = useState(0);

  function addItems() {
    setItemsCart(itemsCart + 1);
  }

  function removeItems() {
    setItemsCart((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="description">
      <p className="company">Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>

      <p className="company_desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="price_container">
        <p className="current_price">$125.00</p>
        <div className="discount_background">
          <p className="discount">50%</p>
        </div>
      </div>
      <p className="previous_price">$250.00</p>

      <div className="cart_container">
        <MinusIcon onClick={removeItems} />
        <p>{itemsCart}</p>
        <PlusIcon onClick={addItems} />
        
        <div className="button">
          <ButtonIcon />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Description;

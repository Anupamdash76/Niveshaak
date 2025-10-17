import React, { useState, useContext } from "react";
import axios from "axios";
import './ActionWindow.css';
import GeneralContext from "./GeneralContext";
const apiUrl = import.meta.env.VITE_API_URL;

const ActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeActionWindow, refetchData } = useContext(GeneralContext);

  const handleActionClick = () => {
    if (stockPrice <= 0 && mode === "BUY") { // Price validation for buys
      alert("Please enter a valid price.");
      return;
    }

    axios.post(`${apiUrl}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode,
    }).then(() => {
      console.log("3. ACTION WINDOW: Order successful! Calling refetchData().");
      refetchData(); // This is its only job now
      closeActionWindow();
    });
  };

  const stopPropagation = (e) => e.stopPropagation();

  const isBuyMode = mode === "BUY";
  const headerText = isBuyMode ? `Buy ${uid}` : `Sell ${uid}`;
  const buttonText = isBuyMode ? "Buy" : "Sell";
  const primaryButtonClass = isBuyMode ? "btn-buy" : "btn-sell";

  return (
    <div className="modal-overlay" onClick={closeActionWindow}>
      <div className="buy-action-container" onClick={stopPropagation}>
        <div className="buy-action-header">
          <h4>{headerText}</h4>
          <button onClick={closeActionWindow} className="close-btn">&times;</button>
        </div>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input type="number" name="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input type="number" name="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice} />
            </fieldset>
          </div>
        </div>
        <div className="buttons">
          <span>Margin required ₹...</span>
          <div>
            <button className={`btn ${primaryButtonClass}`} onClick={handleActionClick}>
              {buttonText}
            </button>
            <button className="btn btn-grey" onClick={closeActionWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionWindow;
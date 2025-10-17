// src/components/Funds.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Funds.css';

const Funds = () => {
  return (
    <div className="funds-container">
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <Link to="#" className="btn btn-green">Add funds</Link>
        <Link to="#" className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>
          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            {/* ... other data rows ... */}
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to="#" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
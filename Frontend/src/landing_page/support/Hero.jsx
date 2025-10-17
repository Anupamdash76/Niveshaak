import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Niveshak Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control my-3"
            type="text"
            placeholder="Eg. how do I activate F&O"
          />
          <div className="d-flex flex-column gap-2">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Niveshak user manual</a>
          </div>
        </div>
        <div className="col-md-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - August 2025</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
 
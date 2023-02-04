import React from "react";
import "./Card.css";


const Card = () => {
  return (
    <>
      <section>
        <div className="card" id="cd">
          <div className="card_body">
            <h1>Organizer</h1>
            <h3>
              -Organizer any event. <br /> any where. <br /> any time.{" "}
            </h3>
          </div>

          <div className="btn1">
            <button>button</button>
          </div>
        </div>

        <div className="card" id="cd">
          <div className="card_body">
            <h1>Vendor</h1>
            <h3>
              start your journey <br/> as a supplier tody.
            </h3>
          </div>

          <div className="btn1">
            <button>button</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

import React from "react";
import "./Specials.css";
import specials from "./specialsData"; // Import the specials data

const Specials = () => {
  return (
    <div className="specials-container">
      <section className="container my-5">
        <h2 style={{ textAlign: "center" }}>This week's specials</h2>
        <div className="row">
          {specials.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-12 text-center">
              <div className="special-item">
                <img className="special-pic img-fluid" src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Type: {item.type}</p>
                <p>Price: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Specials;
// testimonials.js
import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data from the Random User API
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.results);
      });
  }, []);

  return (
    <div className="testimonials-container">
      <section className="container my-5">
        <h2 style={{ textAlign: "center" }}>Testimonials</h2>
        <div className="row">
          {testimonials.map((user, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="testimonial">
                <img
                  className="user-avatar img-fluid"
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <h4>{`${user.name.first} ${user.name.last}`}</h4>
                <p>{user.location.city}</p>
                <p>&quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

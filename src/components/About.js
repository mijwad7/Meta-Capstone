import React from "react";
import AboutPic1 from "../images/logos/aboutus1.jpg";
import AboutPic2 from "../images/logos/aboutus2.jpg";
import "../App.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="lemon-primary-dark">Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              ipsam aspernatur assumenda praesentium eum accusamus, consequatur
              voluptatibus voluptate, quibusdam aliquam odio officiis animi
              nobis commodi dicta quos. Corrupti praesentium fuga perferendis,
              laborum provident exercitationem qui odio sed incidunt dolores
              culpa reprehenderit. Soluta, tenetur. Expedita quibusdam omnis
              facilis animi repellendus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur laborum corporis facilis molestias asperiores illum
              dicta dolorem, quibusdam praesentium consectetur id delectus, rem
              debitis labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              recusandae reprehenderit quod, veniam pariatur quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur laborum corporis facilis molestias asperiores illum
              dicta dolorem, quibusdam praesentium consectetur id delectus, rem
              debitis labore. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="about-image-container">
              <img
                className="about-pic img-fluid"
                src={AboutPic1}
                alt="About us 1"
              />
            </div>
            <div className="about-image-container">
              <img
                className="about-pic img-fluid"
                src={AboutPic2}
                alt="About us 2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

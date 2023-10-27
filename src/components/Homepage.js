import food from "../icons_assets/restaurant chef B.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const headingStyle = {
    fontFamily: "'Markazi Text', serif",
  };
  const mainStyle = {
    backgroundColor: "#495E57",
  };
  return (
    <main style={mainStyle} className="container-fluid text-white py-4">
      <div className="row justify-content-center align-items-center ml-lg-5 mr-lg-5 pl-lg-5 pr-lg-5">
        <div className="col-lg-6">
          <h1
            style={headingStyle}
            className="display-2 text-warning font-family-sans-serif font-family-serif"
          >
            Little Lemon
          </h1>
          <p
            style={headingStyle}
            className="subtitle display-4 font-family-sans-serif font-family-serif"
          >
            Chicago
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking"><button className="btn btn-warning btn-lg">Reserve a table</button></Link>
        </div>
        <div className="col-lg-6">
          <img src={food} className=" img-fluid rounded" alt="Food" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

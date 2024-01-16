import React from "react";
import banner_img from "../images/banner_img.png";

export default function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Articles for</h1>
          <h1 className="text-success">front-end devs</h1>
          <div>
            <p>Articles on web performance, responsive web dedign and more</p>
          </div>
        </div>
        <div className="col-6">
          <img src={banner_img} alt="banner img" />
        </div>
      </div>
    </div>
  );
}

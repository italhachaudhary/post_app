import React from "react";
import banner_img from "../images/banner_img.png";
import PostData from "./PostData";

export default function Banner() {
  return (
    <>
      <div className="container banner">
        <div className="row">
          <div className="col-7 m-auto">
            <div>
              <h1>Articles for</h1>
              <h1 className="text-success">front-end devs</h1>
              <div>
                <p>
                  Articles on web performance, responsive web dedign and more
                </p>
              </div>
            </div>
          </div>
          <div className="col-5  m-auto">
            <img
              src={banner_img}
              alt="banner img"
              className="image-fluid"
              width="100%"
            />
          </div>
        </div>
      </div>
      <PostData />
    </>
  );
}

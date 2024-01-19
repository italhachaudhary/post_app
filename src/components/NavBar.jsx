import React from "react";
import logo from "../images/logo.svg";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img src={logo} alt="logo" width={40} h />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  work <i class="bi bi-bag-fill text-dark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  services <i class="bi bi-cup-hot-fill text-dark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about <i class="bi bi-heart-fill text-dark"></i>
                </a>
              </li>
            </ul>
            <div>
              <button className="btn me-2 text-black">
                blog <i class="bi bi-chat-left-fill text-success"></i>
              </button>

              <button className="btn btn-success text-light rounded-pill">
                planner <i class="bi bi-feather"></i></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import "./Banner.css";
import Dropdown from "react-bootstrap/Dropdown";

const Banner = () => {
  return (
    <header>
      <div className="nav">
        <div>
          <h4>Get the App</h4>
        </div>
        <ul className="nav-bar">
          <li>Investor Relations</li>
          <li>Add Restaurant</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className="head">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        />
        <h3>Discover the best food &amp; drinks in Jaipur</h3>
        <div className="search">
          <i className="fa-solid fa-location-dot" />
          <p>Jaipur</p>
          <Dropdown>
            <Dropdown.Toggle></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                Detect current location
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <i className="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Search for restaurant,cuisine or a dish"
          />
        </div>
      </div>
      <div className="header-image">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
      </div>
    </header>
  );
};


export default Banner;

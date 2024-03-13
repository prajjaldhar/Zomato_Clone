import React from "react";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <section className="sec-5">
      <div className="flex contact">
        <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" />
        <div className="address">
          <h2>Get The Zomato App</h2>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="flex radio">
            <div>
              <input type="radio" name="fill" id="email" defaultChecked />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="radio" name="fill" id="phone" defaultChecked />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="flex email">
            <input className="input" type="text" placeholder="Email" />
            <label className="place"></label>
            <button>Share App Link</button>
          </div>
          <p className="download">Download App from</p>
          <div className="flex app">
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;

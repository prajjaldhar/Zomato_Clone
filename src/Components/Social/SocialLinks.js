import React from "react";
import "./SocialLinks.css";

function SocialLinks({ socialLinks }) {
  return (
    <div className="box-4">
      <h4>Social Links</h4>
      <div>
        {socialLinks.map((link, index) => (
          <i className={`fa-brands ${link.icon}`}></i>
        ))}
        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" />
        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" />
      </div>
    </div>
  );
}

export default SocialLinks;

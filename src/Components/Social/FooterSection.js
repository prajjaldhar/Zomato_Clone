import React from "react";
import "./FooterComponent.css";
import "./SocialLinks.css";

function FooterSection({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default FooterSection;

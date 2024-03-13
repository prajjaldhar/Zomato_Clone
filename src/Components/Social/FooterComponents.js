import React from "react";
import FooterSection from "./FooterSection.js";
import SocialLinks from "./SocialLinks.js";
import SectionData from "../../Data/SectionData.js"; // Import SectionData
import SocialLinksData from "../../Data/SocialLinksData.js";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <section className="footer">
      <div className="sec-7">
        <div className="first">
          <div>
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*--"
              alt=""
            />
          </div>
          <div class="first-1">
            <div>
              <span> India </span>
            </div>
            <div>
              <span> English </span>
            </div>
          </div>
        </div>

        <div className="second">
          {SectionData.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
          <SocialLinks socialLinks={SocialLinksData} />
        </div>
        <hr />
        <p className="third">
          &copy; By Prj Rocks, By continuing past this page, you agree to our
          Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
          All trademarks are properties of their respective owners. 2008-2023 ©
          Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default FooterComponent;

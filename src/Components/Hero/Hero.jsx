import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import me from "../../assets/me.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={me} alt="" />
      <h1>
        <span>Hello, This is Abdo Taleb,</span> I'm a Software Developer. in
        Malmö, Sweden.
      </h1>
      <p>
        Previously, I worked at Telenor in Karlskrona as a Tech Lead and
        Developer.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { XyzTransition } from '@animxyz/react'

// const toggled = true



function About(props) {

  return (
    <div>
      <XyzTransition appear duration="auto">
  <div className="page-wrap">
    <div className="page-hero" xyz="fade small stagger ease-out-back">
      <div className="hero-logo xyz-nested"></div>
      <p className="hero-text xyz-nested">
        Curabitur blandit tempus porttitor. Morbi leo risus.
      </p>
    </div>
    <div
      className="page-features"
      xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
    >
      <div className="feature-item xyz-nested"></div>
      <div className="feature-item xyz-nested"></div>
      <div className="feature-item xyz-nested"></div>
    </div>
    <div
      className="page-section"
      xyz="fade small stagger delay-4 ease-in-out"
    >
      <div className="section-left" xyz="fade left stagger">
        <div className="section-item xyz-nested"></div>
        <div className="section-item xyz-nested"></div>
        <div className="section-item xyz-nested"></div>
      </div>
      <div
        className="section-right xyz-nested"
        xyz="fade big delay-10"
      ></div>
    </div>
    <div className="page-footer" xyz="fade bottom ease-in-out delay-10">
      <div
        className="footer-logo xyz-nested"
        xyz="fade left ease-in-out delay-10"
      ></div>
      <div
        className="footer-right"
        xyz="fade up stagger ease-in-out delay-10"
      >
        <div className="footer-item xyz-nested"></div>
        <div className="footer-item xyz-nested"></div>
        <div className="footer-item xyz-nested"></div>
      </div>
    </div>
  </div>
</XyzTransition>

    </div>
  );
}

export default About;

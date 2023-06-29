import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeControlPhone } from "@fortawesome/free-solid-svg-icons";
import {
  NavStyles,
  DivStyles,
  SecondaryDivStyles,
  SpanStyles,
  SpanColumnStyles,
  Caption,
  SecondCaption,
} from "./NavBar.style";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <NavStyles>
        <h3> {"{"}finsweet </h3>
        <DivStyles>
          <Link to="/home">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <SpanStyles></SpanStyles>
          <Link to="/road assistance">
            <SecondaryDivStyles>
              <div className="icon">
                <FontAwesomeIcon icon={faVolumeControlPhone} />
              </div>
              <SpanColumnStyles>
                <Caption>Road Assistance</Caption>
                <SecondCaption>1800 265 24 52</SecondCaption>
              </SpanColumnStyles>
            </SecondaryDivStyles>
          </Link>
        </DivStyles>
      </NavStyles>
    </>
  );
}

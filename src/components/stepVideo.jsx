import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/button-image.svg";
import "../css/stepVideo.css";

export default function Step() {
  return (
    <>
      <Link to="/video" className="step">
        <img src={image} alt="Video Image" />
      </Link>
    </>
  );
}

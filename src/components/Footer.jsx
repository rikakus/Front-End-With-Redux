import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css"

const Footer = () =>{
    return(
        <footer>
      <h1>Eat, Cook,Repeat</h1>
      <p>Share your best recipe by uploading here !</p>
      <div className="footer-content">
        <ul>
          <li>Product</li>
          <li>Company</li>
          <li>Learn More</li>
          <li>Get In Touch</li>
        </ul>
      </div>
    </footer>
    );
};
export default Footer;
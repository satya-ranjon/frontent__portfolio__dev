import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/satya-ranjon-b75b61220/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedinIn />
    </a>

    <a href="https://twitter.com/satya_ranjon" target="_blank" rel="noreferrer">
      <BsTwitter />
    </a>

    <a
      href="https://www.facebook.com/satyaranjon1/"
      target="_blank"
      rel="noreferrer"
    >
      <FaFacebookF />
    </a>

    <a href="https://twitter.com/satya_ranjon" target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;

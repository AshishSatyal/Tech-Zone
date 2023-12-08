import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-text'>
        <div className='links'>
          <ul>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>store locator</a>
            </li>
            <li>
              <a href='#'>news</a>
            </li>
            <li>
              <a href='#'>careers</a>
            </li>
            <li>
              <a href='#'>contact us</a>
            </li>
          </ul>
        </div>
        <div className='designer'>
          <p>
            design by{" "}
            <a href='https://github.com/Abderraouf-Rahmani'>Abderraouf</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

'use client';
import { Button } from '@mui/material';
import { ASSETS } from '../../assets';
import useIsDarkMode from '../../Helpers/useIsDarkMode';
import React from 'react';
import { TEXT_COLOR_SECONDARY, BACKGROUND_COLOR_MAIN } from '../../constants/index';
const Footer = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <>
      <div
        className="footer-wrap sizing"
        style={{
          backgroundColor: isDarkMode ? TEXT_COLOR_SECONDARY : TEXT_COLOR_SECONDARY,
        }}
      >
        <div className="footer-content">
          <div className="logo-footer">
            <img src={ASSETS.logoGreen} alt="" />
          </div>
          <div className="footer-links">
            <ul className={`${isDarkMode ? 'darkcolor' : 'light'}`}>
              <li>Login</li>
              <li>Signup</li>
              <li>FAQs</li>
              <li>About us</li>
            </ul>
            <button className="foot-btn">Download brand assets</button>
          </div>
        </div>
        <div className="the-line"></div>
        <div className="rights">
          <h4>All rights reserved</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;

'use client';
import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import useIsDarkMode from '../../Helpers/useIsDarkMode';

import { GREYONE, SECONDARY_COLOR } from '../../constants';
const Navbar = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <>
      <div className="nav-wrap sizing">
        <div className="navlinks">
          <div className="logo">
            {isDarkMode ? <img src={ASSETS.logoGreen} alt="" /> : <img src={ASSETS.logoBlack} alt="" />}
          </div>
          <div className="btn-links">
            <Button className="nav-btns log">Login</Button>
            <Button className="nav-btns sign">Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

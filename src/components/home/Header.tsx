import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import { useDevice } from '../../Helpers/useDevice';
import useIsDarkMode from '../../Helpers/useIsDarkMode';
import { TEXT_COLOR_SECONDARY, BACKGROUND_COLOR_MAIN } from '../../constants/index';

const Header = () => {
  const isDarkMode = useIsDarkMode();

  const { IsMob, IsWeb, IsBigWeb, IsTab } = useDevice();
  return (
    <>
      <div className="hero-wrap center ">
        <div className="hero-heading center ">
          <h1>Your Custom Link to Infinite Horizons</h1>
          <h4>Discover a universe of possibilities with effortless link sharing and management</h4>
        </div>
        <div className="hero-links">
          <Button className={isDarkMode ? ' dark-link hero-btn link' : 'hero-btn link'}>linkwave.com/</Button>
          <Button className=" hero-btn wait ">Sign up for Waitlist</Button>
        </div>
        <div className="hero-img">
          {IsWeb && <img src={ASSETS.heroImage} alt="" />}
          {(IsTab || IsMob) && (
            <>
              <img className=" hero-img-1 mt-4" src={ASSETS.heroImageHalf2} alt="" />
              <img className=" hero-img-1 mt-4" src={ASSETS.heroImageHalf1} alt="" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

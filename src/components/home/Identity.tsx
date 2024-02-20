import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import { useDevice } from '../../Helpers/useDevice';
const Identity = () => {
  const { IsMob, IsWeb, IsBigWeb, IsTab } = useDevice();

  return (
    <>
      <div className="craft-wrap sizing">
        <div className="craft-content">
          <div className="craft-img">
            <img src={ASSETS.createImage} alt="" />
          </div>
          <div className="craft-desc">
            <h1>Create an identity that’s uniquely yours</h1>
            <h4>
              With our user-friendly, highly customizable platform, you have the opportunity to effortlessly craft an
              identity that is uniquely and distinctly yours.
            </h4>
            <Button className="craft-btn">Start Creating</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Identity;

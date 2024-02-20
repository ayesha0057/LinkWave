import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import { useDevice } from '../../Helpers/useDevice';
const Craft = () => {
  const { IsMob, IsWeb, IsBigWeb, IsTab } = useDevice();

  return (
    <>
      <div className="craft-wrap sizing">
        <div className="craft-content">
          <div className="craft-img">
            <img src={ASSETS.craft} alt="" />
          </div>
          <div className="craft-desc">
            <h1>
              Craft and personalize your linkwave in an instant{' '}
              {IsWeb && (
                <span className="greenunder-line">
                  <img src={ASSETS.greenunder} alt="" />
                </span>
              )}
            </h1>
            <h4>
              With our user-friendly platform, you can easily create a customized Linkwave that represents you or your
              brand.
            </h4>
            <Button className="craft-btn">Start crafting</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Craft;

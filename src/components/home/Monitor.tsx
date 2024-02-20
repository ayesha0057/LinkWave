import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import { useDevice } from '../../Helpers/useDevice';
import useIsDarkMode from '../../Helpers/useIsDarkMode';

const Monitor = () => {
  const isDarkMode = useIsDarkMode();
  const { IsMob, IsWeb, IsBigWeb, IsTab } = useDevice();

  return (
    <>
      <div className="monitor-wrap sizing">
        <div className="monitor-content">
          <div className="craft-desc monitor">
            <h1>Monitor the number of individuals viewing your profile</h1>
            <h4>
              With our user-friendly platform, you can easily create a customized Linkwave that represents you or your
              brand.
            </h4>
            <Button className="craft-btn">Start Tracking</Button>
          </div>
          <div className="monitor-img">
            <img src={ASSETS.track} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitor;

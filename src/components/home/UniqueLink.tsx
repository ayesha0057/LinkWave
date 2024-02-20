import React from 'react';
import { ASSETS } from '../../assets';
import { Button } from '@mui/material';
import useIsDarkMode from '../../Helpers/useIsDarkMode';

const UniqueLink = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <>
      <div className="link-wrap sizing">
        <div className={isDarkMode ? 'spoitfy-card dark_spo' : 'spoitfy-card'}>
          <img src={ASSETS.spotify} alt="" />
          <h4>Iron Paradise Tour Playlist</h4>
          <p>Listen on Spotify</p>
        </div>
        <div className="link-content">
          <div className="link-main">
            <h1>Get your unique link</h1>
            <h4>...and all the great links are still up for grab</h4>
            <div className="biglink">
              <p>linkwave.com/</p>
              <ul>
                <li>Theon</li>
                <li>Athena</li>
                <li>Poseidon</li>
              </ul>
            </div>
            <Button className="craft-btn unique-btn">Get your link</Button>
          </div>
        </div>

        <div className="qoute-card">
          <h6>“Hard work beats talent when talent doesn't work hard.”</h6>
        </div>
      </div>
    </>
  );
};

export default UniqueLink;

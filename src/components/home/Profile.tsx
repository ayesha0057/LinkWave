import React from 'react';
import { ASSETS } from '../../assets';

const Profile = () => {
  return (
    <>
      <div className="profile-wrap margin">
        <div className="profile-portfolio">
          <img src={ASSETS.publicViewDark} alt="" />
        </div>
      </div>
    </>
  );
};

export default Profile;

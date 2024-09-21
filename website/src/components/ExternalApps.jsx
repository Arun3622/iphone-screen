import React from 'react';
import youtubeIcon from '../assets/youtube.svg';
import googleIcon from '../assets/google.svg';
import xIcon from '../assets/x.svg';
import linkedinIcon from '../assets/linkedin.svg';

const ExternalApps = ({ openSiteInApp }) => {
  return (
    <div className="app-icons">
      <div className="icon" onClick={() => openSiteInApp('https://www.youtube.com')}>
        <img src={youtubeIcon} alt="YouTube" />
        <p>YouTube</p>
      </div>
      <div className="icon" onClick={() => openSiteInApp('https://www.google.com')}>
        <img src={googleIcon} alt="Google" />
        <p>Google</p>
      </div>
      <div className="icon" onClick={() => openSiteInApp('https://www.twitter.com')}>
        <img src={xIcon} alt="X" />
        <p>X</p>
      </div>
      <div className="icon" onClick={() => openSiteInApp('https://www.linkedin.com')}>
        <img src={linkedinIcon} alt="LinkedIn" />
        <p>LinkedIn</p>
      </div>
    </div>
  );
};

export default ExternalApps;

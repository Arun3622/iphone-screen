import React, { useState } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import Notes from './components/Notes';
import Settings from './components/Settings';
import Gallery from './components/Gallery';
import Camera from './components/Camera';
import AppStore from './components/AppStore';
import StatusBar from './components/StatusBar';
import ExternalApps from './components/ExternalApps'; // Import the new component
import calculatorIcon from './assets/calculator.svg';
import clockIcon from './assets/clock.svg';
import notesIcon from './assets/notes.svg';
import settingsIcon from './assets/settings.svg';
import galleryIcon from './assets/gallery.svg';
import cameraIcon from './assets/camera.png';
import appstoreIcon from './assets/appstore.svg';
import phoneIcon from './assets/phone.svg';

function App() {
  const [activeApp, setActiveApp] = useState('home');
  const [currentUrl, setCurrentUrl] = useState('');

  const openSiteInApp = (url) => {
    setCurrentUrl(url);
    setActiveApp('browser');
  };

  const renderApp = () => {
    switch (activeApp) {
      case 'calculator':
        return <Calculator />;
      case 'clock':
        return <Clock />;
      case 'notes':
        return <Notes />;
      case 'settings':
        return <Settings />;
      case 'gallery':
        return <Gallery />;
      case 'camera':
        return <Camera />;
      case 'appstore':
        return <AppStore />;
      case 'browser':
        return (
          <div className="browser">
            <div className="browser-header">
              <button onClick={() => setActiveApp('home')}>Back</button>
              <p>{currentUrl}</p>
            </div>
            <div className="browser-content">
              <iframe
                src={currentUrl}
                title="External Site"
                sandbox="allow-same-origin allow-scripts"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <div className="app-icons">
            <div className="icon" onClick={() => setActiveApp('clock')}>
              <img src={clockIcon} alt="Clock" />
              <p>Clock</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('calculator')}>
              <img src={calculatorIcon} alt="Calculator" />
              <p>Calculator</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('notes')}>
              <img src={notesIcon} alt="Notes" />
              <p>Notes</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('appstore')}>
              <img src={appstoreIcon} alt="App Store" />
              <p>App Store</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('camera')}>
              <img src={cameraIcon} alt="Camera" />
              <p>Camera</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('settings')}>
              <img src={settingsIcon} alt="Settings" />
              <p>Settings</p>
            </div>
            <div className="icon" onClick={() => setActiveApp('gallery')}>
              <img src={galleryIcon} alt="Gallery" />
              <p>Gallery</p>
            </div>
            {/* External Apps */}
            <ExternalApps openSiteInApp={openSiteInApp} /> {/* Render External Apps */}
          </div>
        );
    }
  };

  return (
    <div className="iphone-container">
      <div className="dynamic-island"></div>
      <div className="volume-buttons">
        <div className="volume-button"></div>
        <div className="volume-button"></div>
      </div>
      <div className="screen">
        <StatusBar />
        <div className="screen-content">
          <TransitionGroup>
            <CSSTransition key={activeApp} timeout={300} classNames="fade">
              {renderApp()}
            </CSSTransition>
          </TransitionGroup>
        </div>
        {activeApp !== 'home' && (
          <div className="back-to-home-bar" onClick={() => setActiveApp('home')}></div>
        )}
      </div>
      {activeApp === 'home' && (
        <div className="dock">
          <div className="dock-icon" onClick={() => setActiveApp('home')}>
            <img src={phoneIcon} alt="Phone" />
          </div>
          <div className="dock-icon" onClick={() => setActiveApp('clock')}>
            <img src={clockIcon} alt="Clock" />
          </div>
          <div className="dock-icon" onClick={() => setActiveApp('calculator')}>
            <img src={calculatorIcon} alt="Calculator" />
          </div>
          <div className="dock-icon" onClick={() => setActiveApp('gallery')}>
            <img src={galleryIcon} alt="Gallery" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

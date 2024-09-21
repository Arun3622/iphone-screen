import React from 'react';
import './AppStore.css';

const AppStore = () => {
  const apps = [
    { name: 'Calculator', description: 'Simple Calculator App', icon: './assets/calculator.svg' },
    { name: 'Weather', description: 'Check the Weather', icon: './assets/weather.svg' },
    { name: 'Music', description: 'Music Player', icon: './assets/music.svg' },
    { name: 'Maps', description: 'Navigate the World', icon: './assets/maps.svg' },
    { name: 'Photos', description: 'View and Manage Photos', icon: './assets/photos.svg' },
    { name: 'Health', description: 'Track Your Health', icon: './assets/health.svg' },
  ];

  return (
    <div className="appstore-container">
      <h2>App Store</h2>
      <div className="categories">
        <button className="category-button">Games</button>
        <button className="category-button">Productivity</button>
        <button className="category-button">Entertainment</button>
        <button className="category-button">Social</button>
      </div>
      <div className="app-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <img src={app.icon} alt={app.name} className="app-icon" />
            <h3>{app.name}</h3>
            <p className="app-description">{app.description}</p>
            <button className="install-button">Get</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppStore;

import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleWifi = () => setWifiEnabled(prevState => !prevState);
  const toggleBluetooth = () => setBluetoothEnabled(prevState => !prevState);
  const toggleAirplaneMode = () => setAirplaneMode(prevState => !prevState);
  const toggleDarkMode = () => setDarkMode(prevState => !prevState);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-item" onClick={toggleWifi}>
        <label>Wi-Fi</label>
        <span className={`toggle ${wifiEnabled ? 'on' : 'off'}`}>
          {wifiEnabled ? 'Connected' : 'Disconnected'}
        </span>
      </div>
      <div className="setting-item" onClick={toggleBluetooth}>
        <label>Bluetooth</label>
        <span className={`toggle ${bluetoothEnabled ? 'on' : 'off'}`}>
          {bluetoothEnabled ? 'On' : 'Off'}
        </span>
      </div>
      <div className="setting-item" onClick={toggleAirplaneMode}>
        <label>Airplane Mode</label>
        <span className={`toggle ${airplaneMode ? 'on' : 'off'}`}>
          {airplaneMode ? 'Enabled' : 'Disabled'}
        </span>
      </div>
      <div className="setting-item" onClick={toggleDarkMode}>
        <label>Dark Mode</label>
        <span className={`toggle ${darkMode ? 'on' : 'off'}`}>
          {darkMode ? 'On' : 'Off'}
        </span>
      </div>
    </div>
  );
}

export default Settings;

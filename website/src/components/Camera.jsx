import './camera.css';
import React, { useRef, useEffect, useState } from 'react';

const Camera = () => {
  const videoRef = useRef(null); // Reference for the video element
  const [error, setError] = useState(null); // State to handle any errors

  useEffect(() => {
    // Request access to the camera when the component mounts
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true, // Access video (camera)
          audio: false // Set to true if you also want audio access
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream; // Set the video source to the camera stream
        }
      } catch (err) {
        console.error('Error accessing camera: ', err);
        setError('Unable to access the camera.');
      }
    };

    getCameraStream();

    // Cleanup function to stop the camera when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-app">
      {error ? (
        <p className="camera-error">{error}</p>
      ) : (
        <div className="camera-viewfinder">
          <video ref={videoRef} autoPlay playsInline></video>
        </div>
      )}
      <div className="camera-controls">
        <button className="shutter-button"></button>
      </div>
    </div>
  );
};

export default Camera;

import React from 'react';
import { Audio } from 'react-loader-spinner';
import './LoadingPage.css';

function LoadingPage() {
  return (
    <div className="loader">
      <Audio
        height="100"
        width="100"
        radius="9"
        color="white"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <h1>Loading...</h1>
    </div>
  );
}

export default LoadingPage;

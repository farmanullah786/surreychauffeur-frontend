import React from 'react';

const LoadingIndicator = () => {
  return (
    <div id="ctl00_UpdateProgress1" style={{ display: 'none' }}>
      <div
        style={{
          top: 0,
          height: '1500px',
          backgroundColor: 'transparent',
          opacity: 0.75,
          filter: 'alpha(opacity=75)',
          verticalAlign: 'middle',
          left: 0,
          zIndex: 999999,
          width: '100%',
          position: 'absolute',
          textAlign: 'center',
          color: '#000',
        }}
      >
        <img alt="" style={{ position: 'relative', top: '10%' }} src="images/loading_2.gif" />
      </div>
    </div>
  );
};

export default LoadingIndicator;

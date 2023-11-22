import React from 'react';

const CopyrightBar = () => {
  return (
    <div className="copyright-bar">
      <div className="container">
        <div className="col-md-6 col-sm-6 copyright-text">
          <p className="left">Copyright Ⓒ pinkberrycars.com All rights reserved.</p>
        </div>
        <div className="col-md-6 col-sm-6 copyright-text">
          {/* Add any additional content for the right side of the copyright bar if needed */}
        </div>
      </div>
    </div>
  );
}

export default CopyrightBar;

import React from 'react';

const StickyContactBar = () => {
  return (
    <div className="sticky-container">
      <ul className="sticky">
        <li>
          <a href="https://wa.me/+442033276606" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp"></i>
            <p>&nbsp; +442033276606</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StickyContactBar;
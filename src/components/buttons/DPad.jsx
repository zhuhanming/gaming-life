import React from 'react';

import './Buttons.scss';

const DPad = ({
  handleUp,
  handleDown,
  handleLeft,
  handleRight,
  handleRelease
}) => {
  return (
    <div className="dpad">
      <button
        type="button"
        className="left-button"
        onTouchStart={handleLeft}
        onTouchEnd={handleRelease}
        onTouchCancel={handleRelease}
      >
        <i className="fas fa-caret-left" />
      </button>
      <div className="dpad__vert">
        <button
          type="button"
          className="up-button"
          onTouchStart={handleUp}
          onTouchEnd={handleRelease}
          onTouchCancel={handleRelease}
        >
          <i className="fas fa-caret-up" />
        </button>
        <button
          type="button"
          className="down-button"
          onTouchStart={handleDown}
          onTouchEnd={handleRelease}
          onTouchCancel={handleRelease}
        >
          <i className="fas fa-caret-down" />
        </button>
      </div>
      <button
        type="button"
        className="right-button"
        onTouchStart={handleRight}
        onTouchEnd={handleRelease}
        onTouchCancel={handleRelease}
      >
        <i className="fas fa-caret-right" />
      </button>
    </div>
  );
};

export default DPad;

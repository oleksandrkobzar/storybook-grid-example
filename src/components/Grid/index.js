import React from "react";
import PropTypes from "prop-types";

import "./grid.scss";

function Grid({ children }) {
  return (
    <div className="grid">
      <div className="grid__wrapper">{children}</div>
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node
};
export default Grid;

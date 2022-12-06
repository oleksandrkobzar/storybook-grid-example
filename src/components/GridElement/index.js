import React from "react";
import PropTypes from "prop-types";

function GridElement({ xs, sm, md, lg, xl, children }) {
  const classNames = [
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`
  ]
    .filter((v) => !!v)
    .join(" ");

  return <div className={`col ${classNames}`}>{children}</div>;
}

GridElement.propTypes = {
  xs: PropTypes.oneOf([3, 4, 6, 12]),
  sm: PropTypes.oneOf([3, 4, 6, 12]),
  md: PropTypes.oneOf([3, 4, 6, 12]),
  lg: PropTypes.oneOf([3, 4, 6, 12]),
  xl: PropTypes.oneOf([3, 4, 6, 12])
};

GridElement.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

export default GridElement;

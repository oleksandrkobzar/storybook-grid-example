import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

import image from "../../assets/images/image.jpeg";
import image360 from "../../assets/images/image-360_x_239.jpeg";
import image600 from "../../assets/images/image-600_x_400.jpeg";
import image800 from "../../assets/images/image-800_x_532.jpeg";
import image1024 from "../../assets/images/image-1024_x_682.jpeg";
import image1288 from "../../assets/images/image-1288_x_858.jpeg";

function Card({ xs, sm, md, lg, xl }) {
  const classNames = [
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`
  ]
    .filter((v) => !!v)
    .join(" ");

  return (
    <div className={`col ${classNames}`}>
      <div className="card">
        <img
          src={image}
          srcSet={`
            ${image360} 360w,
            ${image600} 600w,
            ${image800} 800w,
            ${image1024} 1024w,
            ${image1288} 1288w
          `}
          sizes="(min-width: 360px) 100vw,
           (min-width: 600px) 100vw,
            (min-width: 800px) 100vw,
             (min-width: 1024px) 100vw,
              (min-width: 1288px) 100vw,
               100vw"
          loading="lazy"
          alt="Alt example"
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  xs: PropTypes.oneOf([3, 4, 6, 12]),
  sm: PropTypes.oneOf([3, 4, 6, 12]),
  md: PropTypes.oneOf([3, 4, 6, 12]),
  lg: PropTypes.oneOf([3, 4, 6, 12]),
  xl: PropTypes.oneOf([3, 4, 6, 12])
};

Card.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

export default Card;

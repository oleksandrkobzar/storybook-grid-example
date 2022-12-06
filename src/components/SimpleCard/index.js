import React from "react";

import "./simple-card.scss";

import image from "../../assets/images/image.jpeg";
import image360 from "../../assets/images/image-360_x_239.jpeg";
import image600 from "../../assets/images/image-600_x_400.jpeg";
import image800 from "../../assets/images/image-800_x_532.jpeg";
import image1024 from "../../assets/images/image-1024_x_682.jpeg";
import image1288 from "../../assets/images/image-1288_x_858.jpeg";

function SimpleCard() {
  return (
    <div className="simple-card">
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
  );
}

export default SimpleCard;

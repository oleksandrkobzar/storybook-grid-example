import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

import image from "../../assets/images/image.jpeg";
import image360 from "../../assets/images/image-360_x_239.jpeg";
import image600 from "../../assets/images/image-600_x_400.jpeg";
import image800 from "../../assets/images/image-800_x_532.jpeg";
import image1024 from "../../assets/images/image-1024_x_682.jpeg";
import image1288 from "../../assets/images/image-1288_x_858.jpeg";

function Card({ title, text, price, priceTitle, whiteBackground, linkTitle, linkUrl }) {
  return (
    <div className={`card ${whiteBackground ? "card--white" : ""}`}>
      <div className="card__image">
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
      <div className={`card__wrapper ${whiteBackground ? "card__wrapper--with-paddings" : ""}`}>
        <h3 className="card__wrapper__title">{title}</h3>
        <p className="card__wrapper__text">{text}</p>
        <div className="card__wrapper__price-title">{priceTitle}</div>
        <div className="card__wrapper__price">
          {price} <span>&euro;</span>
        </div>
        <a href={linkUrl} className="card__wrapper__link" title={linkTitle}>
          {linkTitle}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  whiteBackground: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  priceTitle: PropTypes.string,
  price: PropTypes.number,
  linkTitle: PropTypes.string,
  linkUrl: PropTypes.string
};

Card.defaultProps = {
  whiteBackground: false,
  title: "Lorem ipsum dolor",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius cansectetur.",
  priceTitle: "Room starting at",
  price: 106,
  linkTitle: "Find out more",
  linkUrl: "/"
};

export default Card;

import React from "react";
import icon from "assets/img/sprite.svg";
import svgStyles from "sass/components/svg.module.scss";

const Svg = ({ className, name }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={svgStyles[className]}
  >
    <use href={`${icon}#icon-${name}`} />
  </svg>
);

export default Svg;

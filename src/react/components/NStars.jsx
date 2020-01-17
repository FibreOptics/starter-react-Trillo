import React from "react";
import Svg from "./Svg";

const NStars = ({ n }) => {
  let stars = [];
  for (let i = 0; i < n; i++) {
    stars.push(<Svg key={`star__${i}`} name='star' className='starIcon' />);
  }
  return stars;
};

export default NStars;

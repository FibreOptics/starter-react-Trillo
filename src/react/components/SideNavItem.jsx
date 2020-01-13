import React from "react";
import { NavLink } from "react-router-dom";
import Svg from "./Svg";
import SideNavItemStyles from "sass/components/sideNavItem.module.scss";

const SideNavItem = ({ name, to, text, active }) => (
  <li className={SideNavItemStyles[`__item${active ? "__active" : ""}`]}>
    <NavLink
      to={to}
      //activeClassName={SideNavItemStyles["__active"]}
      className={SideNavItemStyles["__link"]}
    >
      <Svg name={name} className='sideIcon' />
      <span>{text}</span>
    </NavLink>
  </li>
);

export default SideNavItem;

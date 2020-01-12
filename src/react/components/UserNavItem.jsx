import React from "react";
import Svg from "./Svg";
import UserNavItemStyles from "sass/components/userNavItem.module.scss";

const UserNavItem = ({ iconbox, user, src, name, span }) => (
  <div
    className={
      UserNavItemStyles[`${iconbox ? "__iconbox" : ""}${user ? "__user" : ""}`]
    }
  >
    {!src ? null : (
      <img src={src} alt='User' className={UserNavItemStyles["userPhoto"]} />
    )}
    {!name ? null : <Svg name={name} className='navIcon' />}
    <span
      className={
        UserNavItemStyles[
          `${iconbox ? "__notification" : ""}${user ? "__user-name" : ""}`
        ]
      }
    >
      {span}
    </span>
  </div>
);

export default UserNavItem;

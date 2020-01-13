import React from "react";

import { Svg, UserNavItem, SideNavItem } from "react/components";
import logo from "assets/img/logo.png";
import logoStyles from "sass/components/logo.module.scss";
import user from "assets/img/user.jpg";
import "sass/layouts.scss";

function FirstPage() {
  return (
    <div className='App'>
      <header className='header'>
        <img src={logo} alt='trillo logo' className={logoStyles.logo} />
        <form action='' className='search'>
          <input
            type='text'
            className='search__input'
            placeholder='search hotels'
          />
          <button className='search__button'>
            <Svg name='magnifying-glass' className='search__icon' />
          </button>
        </form>
        <nav className='user-nav'>
          <UserNavItem name='bookmark' span='7' iconbox />
          <UserNavItem name='chat' span='13' iconbox />
          <UserNavItem src={user} span='Jonas' user />
        </nav>
      </header>
      <div className='content'>
        <nav className='sidebar'>
          <ul className='side-nav'>
            <SideNavItem name='home' text='Hotel' to='/hotel' active />
            <SideNavItem name='aircraft-take-off' text='Flight' to='/flight' />
            <SideNavItem name='key' text='Car rental' to='/carRental' />
            <SideNavItem name='map' text='Tours' to='/tours' />
          </ul>
          <div className='legal'>
            &copy; 2017 by trillo. All rights reserved.
          </div>
        </nav>
        <main className='hotel-view'>Hotel View</main>
      </div>
    </div>
  );
}

export default FirstPage;

import React from "react";
import { Svg, UserNavItem } from "react/components";
import logo from "assets/img/logo.png";
import logoStyles from "sass/components/logo.module.scss";
import user from "assets/img/user.jpg";
import "sass/layouts.scss";

function App() {
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
        <nav className='sidebar'>Navigation</nav>
        <main className='hotel-view'>Hotel View</main>
      </div>
    </div>
  );
}

export default App;

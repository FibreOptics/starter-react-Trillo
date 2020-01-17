import React from "react";

import {
  Svg,
  UserNavItem,
  SideNavItem,
  GalleryItem,
  NStars
} from "react/components";

import logo from "assets/img/logo.png";
import user from "assets/img/user.jpg";
import hotel1 from "assets/img/hotel-1.jpg";
import hotel2 from "assets/img/hotel-2.jpg";
import hotel3 from "assets/img/hotel-3.jpg";
import user3 from "assets/img/user-3.jpg";
import user4 from "assets/img/user-4.jpg";
import user5 from "assets/img/user-5.jpg";
import user6 from "assets/img/user-6.jpg";

import logoStyles from "sass/components/logo.module.scss";
import "sass/layouts.scss";

const FirstPage = () => {
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
        <main className='hotel-view'>
          <div className='gallery'>
            <GalleryItem src={hotel1} alt='Photo of hotel 1' />
            <GalleryItem src={hotel2} alt='Photo of hotel 2' />
            <GalleryItem src={hotel3} alt='Photo of hotel 3' />
          </div>
          <div className='overview'>
            <h1 className='overview__heading'>Hotel Las Palmas</h1>
            <div className='overview__stars'>
              <NStars n={5} />
            </div>
            <div className='overview__location'>
              <Svg name='location-pin' className='locationIcon' />
              <button className='btn-inline'>Albufeira, Portugal</button>
            </div>
            <div className='overview__rating'>
              <div className='overview__rating-average'>8.6</div>
              <div className='overview__rating-count'>429 votes</div>
            </div>
          </div>

          <div className='detail'>
            <div className='description'>
              <p className='paragragh'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className='paragraph'>
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className='list'>
                <li className='list__item'>Close to the beach</li>
                <li className='list__item'>Breakfast</li>
                <li className='list__item'>Airport shuttle</li>
                <li className='list__item'>Wifi</li>
                <li className='list__item'>Air cond.</li>
                <li className='list__item'>Pets allowed</li>
                <li className='list__item'>Multi-language staffs</li>
                <li className='list__item'>Perfect a family</li>
              </ul>
              <div className='recommend'>
                <p className='recommend__count'>
                  John and 9 other friends recommend this hotel.
                </p>
                <div className='recommend__friends'>
                  <img
                    src={user3}
                    alt='Friend 1'
                    className='recommend__photo'
                  />
                  <img
                    src={user4}
                    alt='Friend 2'
                    className='recommend__photo'
                  />
                  <img
                    src={user5}
                    alt='Friend 3'
                    className='recommend__photo'
                  />
                  <img
                    src={user6}
                    alt='Friend 4'
                    className='recommend__photo'
                  />
                </div>
              </div>
            </div>

            <div className='user-review'></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FirstPage;

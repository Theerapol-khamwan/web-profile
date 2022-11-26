import React from 'react';
import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <header className={style.masthead}>
        <div className={style.navBar}>
          <div className={style['mega-menu-wrap']}>
            <ul className={style['primary-wrap']}>
              <li>
                <a>.home()</a>
              </li>
              <li>
                <a>.expertise()</a>
              </li>
              <li>
                <a>.work()</a>
              </li>
              <li>
                <a>.experience()</a>
              </li>
              <li>
                <a>.contact()</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

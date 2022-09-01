import React from 'react';
import logo from "../shared/img/Logo.svg";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-top">
          <img src={logo} alt="" className="header-logo"/>
          <input type="text" className="search" placeholder="Поиск"/>
        </div>
        <ul className="header-bottom">
          <li className="header-bottom__widget">
            Роллы
          </li>
          <li className="header-bottom__widget">
            Сеты
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
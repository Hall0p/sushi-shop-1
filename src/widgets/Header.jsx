import React from 'react';
import logo from "../shared/img/Logo.svg";
import {NavLink} from "react-router-dom";
import Search from "../features/Search";

const Header = ({filter, setFilter}) => {

  return (
    <div className="container">
      <header className="header">
        <div className="header-top">
          <img src={logo} alt="" className="header-logo"/>
          <Search filter={filter} setFilter={setFilter}/>
        </div>
        <ul className="header-bottom">
          <li>
            <NavLink
              to='rolls'
              className={({isActive}) =>
                isActive
                  ? 'header-bottom__link header-bottom__link--active'
                  : 'header-bottom__link header-bottom__link--disabled'
              }
            >
              Роллы
            </NavLink>
          </li>
          <li>
            <NavLink
              to='sets'
              className={({isActive}) =>
                isActive
                  ? 'header-bottom__link header-bottom__link--active'
                  : 'header-bottom__link header-bottom__link--disabled'
              }
            >
              Сеты
            </NavLink>
          </li>
          <li>
            <NavLink
              to='cart'
              className={({isActive}) =>
                isActive
                  ? 'header-bottom__link header-bottom__link--active'
                  : 'header-bottom__link header-bottom__link--disabled'
              }
            >
              Корзина
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
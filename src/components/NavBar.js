import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import{ MdClose, MdMenu } from 'react-icons/md';

const NavBarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: #262626;
  ul{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    list-style: none;
    li{
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover{
        background-color: #383838;
      }
    }
    a{
      display: inline-block;
      font-family: 'Arial';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: #BCB4B4;
      outline: none;
    }
    .active{
      color: white;
    }
  }
  .mobile-menu-icon{
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    .hide-item {
      display: none;
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: #262626;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top)
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li{
        display: block;
        margin-bottom: 1rem;
      }      
    }
  }
`;

export default function NavBar() {

    const [showNav, SetShowNav] = useState(false);

    return (
        <NavBarStyles>
          <div className="mobile-menu-icon">
            <MdMenu />
          </div>


            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
              <div className="closeNavIcon" onClick={() =>
              SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}              
              >
              <MdClose />
              </div>

                <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                 }
                >
                  About Me
                </NavLink>
                </li>

                <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                 }
                >
                  Portfolio
                </NavLink>
                </li>

                <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                 }
                >
                  Contact
                </NavLink>
                </li>

                <li>
                <NavLink
                  to="/resume"
                  className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                 }
                >
                  Résumé
                </NavLink>
                </li>                


            </ul>
        </NavBarStyles>

    );
}
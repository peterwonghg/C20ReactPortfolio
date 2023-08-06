import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

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
      font-size: 1rem;
      color: #BCB4B4;
      outline: none;
    }
    .active{
      color: white;
    }
  }
`;

export default function NavBar() {
    return (
        <NavBarStyles>
            <ul>
                <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "active" : ""
                 }
                >
                  About
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
                  Resume
                </NavLink>
                </li>                


            </ul>
        </NavBarStyles>

    );
}
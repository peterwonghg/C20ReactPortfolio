import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ColStyles = styled.div`
    .heading {
        color: #BCB4B4;
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    li a{color:#BCB4B4}
    li { 
        margin-bottom: 2rem;
        list-style: none;
    }

    .active{
        color: white;
      }
    a {
        font-size: 1.5rem;
    }
`;

export default function FooterCol({
    heading = '',
    links = [
        {
            type: 'link**',
            title: 'Home',
            path: '/home',
        },
        {
            type: 'link**',
            title: 'Portfolio',
            path: '/portfolio',
        },        
       ],
}) {
  return (
    <ColStyles>
    <div>
        <h1 className="heading">{heading}</h1>
        <ul>
            {
                links.map((item,index) => (
                    <li key={index}>
                        {item.type === 'Link' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ) : (
                            <a href={item.path} target="_blank" rel="noreferrer">
                                {item.title}
                            </a>
                        )}                     
                    </li>
                ))}
        </ul>
    </div>
    </ColStyles>
  );
}

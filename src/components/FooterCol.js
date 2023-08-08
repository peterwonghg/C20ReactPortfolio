import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ColStyles = styled.div`
    .heading {
        color: white;
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    li a{color:white}
    li { 
        margin-bottom: 2rem;
        list-style: none;
    }

    .active{
        color: white;
      }
    a {
        font-size: 2rem;
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

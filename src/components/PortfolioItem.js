import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/project.png';

const PortfolioItemStyles = styled.div`

  .portfolioItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid #BCB4B4;
    img {
      height: 100%;
    }
  }
  .portfolioItem__info {
    margin-top: 1rem;
    background-color: #262626;
    padding: 1rem;
    border-radius: 12px;  
  }
  .portfolioItem__title {
    font-size: 2.2rem;
    color: #BCB4B4;
    text-decoration: underline;
  }
  .portfolioItem__desc {
    font-size: 1.6rem;
    font-family: 'Arial';
    margin-top: 1rem;
    color: #BCB4B4;

  }
  @media only screen and (max-width: 768px) {
    .portfolioItem__img {
      height: 350px;
    }
  }
`;

export default function PortfolioItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum sjhf fkikfgkjkf ckjkjmf klcjkdjd ckjhckj cdkjkjd hjduujdn dkjdjn dkudkjnd hjjjkd.',
  path = 'https://google.com',
  github = 'https://github.com/peterwonghg'
}) {
  return (
    <PortfolioItemStyles>
      <Link to={path} target="_blank" rel="noopener noreferrer" className="portfolioItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="portfolioItem__info"> 
        <Link to={path} target="_blank" rel="noopener noreferrer" className="portfolioItem__title">
            {title} 
        </Link>
        <p className="portfolioItem__desc">{desc}</p>
        <a href={github} className="portfolioItem__desc" target="_blank" rel="noopener noreferrer">{github}</a>     
      </div>
    </PortfolioItemStyles>
  );
}
import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioInfo from '../assets/data/portfolio';
import Footer from '../components/Footer';



const PortfolioStyles = styled.div`
  padding: 10rem 0;
  background: #383838;
  .portfolio__allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 3rem;
    margin-top: 5rem;
    color: #BCB4B4;
  }
`;

export default function Portfolio() {

  const [portfolioData] = useState(PortfolioInfo);

  return (
  
  <PortfolioStyles>
      <div className='container'>
          <SectionTitle heading="Portfolio"
          subheading="Recent Works" />

          <div className="portfolio__allitems">
            {portfolioData.map((item) => (
              <PortfolioItem 
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                path={item.path}
                github={item.github}
                // link={item.path}
              />
            ))}

          </div>
          <br></br>
          <br></br>
          <Footer />   
      </div>
  </PortfolioStyles>
  );
}

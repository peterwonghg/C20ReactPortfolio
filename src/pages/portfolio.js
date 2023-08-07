import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';

const PortfolioStyles = styled.div`
  padding: 10rem 0;
`;

export default function portfolio() {
  return (
  <PortfolioStyles>
      <div className='container'>
          <SectionTitle heading="Portfolio"
          subheading="Recent Works" />
      </div>
  </PortfolioStyles>
  )
}

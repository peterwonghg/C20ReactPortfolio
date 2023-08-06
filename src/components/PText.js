import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    color: #BCB4B4;
    max-width: 800px;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 2rem;
`;


export default function PText(props) {
  return (
    <PStyle>
        <p>{props.children}</p>
    </PStyle>
  )
}

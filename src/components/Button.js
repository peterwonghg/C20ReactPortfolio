import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 3.5rem;
        font-weight: bold;
        background-color: WhiteSmoke;
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid WhiteSmoke;
        color: PaleVioletRed;
    }
`;

export default function Button({btnLink, btnText}) {
  return (
    <ButtonStyle>
        <Link className="button" to={btnLink}>{btnText}</Link>
    </ButtonStyle>
  )
}

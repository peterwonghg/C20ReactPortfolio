import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
padding: 2rem;
    background-colour:#383838;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
        color: PaleVioletRed;
        background-color: #262626;
        padding: 1.3rem;
        align-item: center;
        justify-content: center;
        border-radius: 50%;
        font-size:65px;
    }
    svg {
        width: 5rem;
    }
    .info {
        background-color: #383838;
        padding: 0.3rem;
        align-item: center;
        justify-content: center;
        border-radius: 8px;
    }
`;

export default function ContactInfoItem({
    icon = <MdPlace />,
    text = 'Location Info',
}) {
  return (
    <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
            <PText>{text}</PText>
        </div>
    </ItemStyles>    
  );
}

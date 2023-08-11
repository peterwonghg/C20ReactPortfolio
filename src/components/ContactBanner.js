import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const ContactBannerStyles = styled.div`
    padding: 50rem 35rem 50rem 35rem;
    color: #BCB4B4;
    max-height:1000px;

    .contactBanner__wrapper {
        padding:2px;
        background-color: #262626;
        border-radius: 12px;
        text-align: center;
    }
    .contactBanner__heading {
        min-height: 100px;        
        font-size: 4rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    @media only screen and (min-width: 768px) {
        .contactBanner__heading {
            font-size: 2.8rem;
        }
    }

`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
    <div className="container">
        <div className="contactBanner__wrapper">
            <PText>Have a project in mind</PText>
            <h3 className="contactBanner__heading">Let me code your Vision</h3>
            <Button btnText="Contact Now" btnLink="/contact" />
            <br></br>
        </div>

    </div>
    </ContactBannerStyles>
  );
}

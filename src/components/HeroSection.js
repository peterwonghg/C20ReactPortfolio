import React from 'react';
import HeroImg from '../assets/images/hero.png';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const HeroStyles = styled.div`
    .hero {
        height: 80vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: #383838;            
    }
    .hero__heading {
        font-size: 3rem;
        color: #BCB4B4;
        margin-bottom: -9rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
    .hero__name {
        margin-top: 3rem;
        font-size: 6rem;
        font-weight: bold;            
        color: PaleVioletRed;
        }

    .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid WhiteSmoke;
        }        
    }
    .hero__info {
        margin-top:-11rem;
    }
    
`;

export default function HeroSection() {
    return (
        <HeroStyles>
        <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                    <span>G'day - Konnichiwa ...... Introducing:</span>
                    <br></br>
                    <span className="hero__name">PETER WONG</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="Hero" />
                </div>
                <div  className="hero__info">
                <Button btnLink="/portfolio" btnText="Come Browse My Skills" />
                </div>
                <div>
                    <PText>
                        <br></br>
                        I am a freelance Full Stack Ninja Web Developer with extensive industry experience. 
                        <br></br>
                        <br></br>                        
                        Let me transform Your Business Vision into Reality.
                    </PText>

                </div>
            </div>
        </div>
        </HeroStyles>
    );
}
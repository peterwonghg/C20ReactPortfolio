import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
    padding-top: rem;
    background-color: #262626;
    .container{
        display: flex; 
        gap: 3rem;
    }
    .footer__col1 {
        display: flex;
        flex: 2;

    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
        text-align: right;
        padding-right:100px     
    }    
    .footer__col1__title {
        font-size: 3rem;
        color: White;
        margin-bottom: 1rem;
        width:200px;
    }
`;

export default function Footer() {
  return (
    <FooterStyles>
        <div className="container">
            <div className="footer__col1">
                <h1 className="footer__col1__title">Peter <br></br>Wong</h1>
                <PText>
                    A full stack web developer based in Perth, AUSTRALIA.
                    I enjoy collaborating with stakeholders on solving varied business challenges and implementing innovative solutions to overcome organisational needs.
                </PText>
                <div className="footer__col2">
                    <FooterCol 
                        heading="Links" 
                        links={[
                            {
                            title:"Home",
                            path:'/',
                            type:"Link"
                            },
                            {
                                title:"Portfolio",
                                path:'/portfolio',
                                type:"Link"
                            },
                            {
                                title:"Contact",
                                path:'/contact',
                                type:"Link"
                            },
                            {
                                title:"Resume",
                                path:'/resume',
                                type:"Link"
                            },                                                                                            
                        ]}                    
                    />
                </div>

                <div className="footer__col3">
                    <FooterCol 
                        heading="Contact"
                        links={
                            [
                                {
                                    title: "+61 410 652 546",
                                    path: 'tel: +61 410 652 546'
                                },
                                {
                                    title: "ninjapete@gmail.com",
                                    path: 'mailto: ninjapete@gmail.com'                                    
                                }
                            ]
                        }
                    />
                </div>

                <div className="footer__col4">
                <FooterCol 
                        heading="Social"
                        links={
                            [
                                {
                                    title: "LinkedIn",
                                    path: 'http://linkedin.com'
                                },
                                {
                                    title: "Facebook",
                                    path: 'http://facebook.com'                                
                                },
                                {
                                    title: "Instagram",
                                    path: 'http://instagram.com'                                
                                },
                                {
                                    title: "Twitter",
                                    path: 'http://twitter.com'                                
                                }                                
                            ]
                        }
                    />
                </div>

            </div>       
        </div>
    </FooterStyles>
  );
}

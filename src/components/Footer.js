import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';


const FooterStyles = styled.div`
   
    padding: 0rem 5rem 0rem 5rem;
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
        padding-right: 5rem;     
    }    
    .footer__col1__title {
        font-size: 2.5rem;
        color: White;
        margin-bottom: 1rem;

    }


`;

export default function Footer() {
  return (
    <FooterStyles>
        <div className="container">
            <div className="footer__col1">
                <h1 className="footer__col1__title">Peter Wong</h1>

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
                                    title: "+61 333 666 999",
                                    path: 'tel: +61 333 666 999'
                                },
                                {
                                    title: "ninjapete@gmail.com",
                                    path: 'mailto: ninjapete@gmail.com'                                    
                                },
                                {
                                    title: "github.com/peterwonghg",
                                    path: 'https://github.com/peterwonghg'                                    
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

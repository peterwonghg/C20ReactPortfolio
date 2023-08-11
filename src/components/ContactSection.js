import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
    padding: 10rem 28rem 10rem 25rem;
    background: #383838;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        background-color: #BCB4B4;
        left: 43%;
        top: 0%;
        transform: translate (-50%, -50%);
    }
    .left {
        width: 100%;
        max-width: 485px;
    }
    .right {
        width: 100%;
        max-width: 700px;
    }
    @media only screen and (max-width: 768px) {
        .contactSection__wrapper {
            flex-direction: column;
        }
        .contactSection__wrapper::after {
            display: none;
        }
        ,left,
        .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`

export default function ContactSection() {
  return (
    <ContactSectionStyle>
        <div className="container">
            <SectionTitle heading="Contact" subheading="Get In Touch" />
            <div className="contactSection__wrapper">
                <div className="left">
                    <ContactInfoItem icon={<MdLocalPhone />} text="+61 333 666 999" />
                    <ContactInfoItem icon={<MdEmail />} text="ninjapete@gmail.com" />
                    <ContactInfoItem text="Perth, AUSTRALIA" />                          
                </div>
                <div className="right">
                    <ContactForm />
                </div>
            </div>
        </div>
    </ContactSectionStyle>
  );
}

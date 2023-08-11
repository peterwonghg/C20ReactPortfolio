import React from 'react'
import PText from './PText';
import styled from 'styled-components';

const ResumeItemStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3rem;
    postion: relative;
    color: #BCB4B4;

    .title {
        margin-left: 20rem;
        font-size: 2.4rem;
        padding-bottom: 10px;

    }
        .items {
            display: flex;
            gap: 1.5rem;
            position: absolute;
            left: 90rem;
        }
        .item {
            background-color: #262626;
            padding: 0rem 1.5rem 0rem 1.5rem;
            border-radius: 8px;
        }

        @media only screen and (max-width: 768px) {
            flex-direction: Column;
            align-items: flex-start;
            gap: 1rem;
        }
        .title {
            font-size: 2rem;
        }
    }
`;

export default function ResumeInfoItem({
    title = 'This is The Title',
    items = ['HTML', 'CSS', 'JS'],
}) {
    return (
        <ResumeItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </ResumeItemStyles>
    );

}


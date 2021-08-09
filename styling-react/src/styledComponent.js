import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
    desktop: 1024,
    tablet: 768
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em){
            ${css(...args)};
        }
    `;

    return acc;
}, {});

const Box = styled.div`
    /* porps로 넣어 준 값을 직접 전달해 줄 수 있다. */
    background: ${props => props.color || 'blue'};
    box-sizing: border-box;
    padding: 1rem;
    display: flex;

    /* responsive */
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
        props.inverted &&
        `
            background: none;
            border: 2px solid white;
            color: white;

            &:hover {
                background: white;
                color: black;
            }
        `
    };

    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
    </Box>
);

export default StyledComponent;
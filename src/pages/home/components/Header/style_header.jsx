import styled from "@emotion/styled";
import header from 'images/img/intro-bg.jpg'
import theme  from 'design-system/config';
export const HeaderWrapper=styled('section')`
    label:HeaderWrapper;
    height: 800px;
    padding: 20% 0 ;
    text-align: center;
    background: url(${header}) no-repeat center center /cover fixed;

`;

export const H3=styled('h3')` 
    label: H3;
    font-size: 1.5rem;
    color: ${theme.white};
`;

export const Title=styled('h1')` 
    label: Title;
    font-size: 3rem;
    color: ${theme.white};
`;
export const LearnMore=styled('button')` 
    label: LearnMore;
    font-size: 1rem;
    margin-right:2rem ;
    padding: 1rem 3rem;
    border: 1px solid ${theme.white};
    background: ${theme.white};
    color: ${theme.secondary};
    border-radius: 5px;
    cursor: pointer;
    transition:  all 0.3s ;

    :hover{

    color: ${theme.white};
    background: ${theme.primaary};
    border: 1px solid ${theme.primaary};

    }
`;
export const RegisterNow=styled('button')` 
    label: RegisterNow;
    font-size: 1rem;
    padding:1rem 3rem;
    border: 1px solid ${theme.primaary};
    background: ${theme.primaary};
    border-radius: 5px;
    cursor: pointer;
    color: ${theme.white};
    transition:  all 0.3s ;
    :hover{
    color: ${theme.secondary};  
    background: ${theme.white};
    border: 1px solid ${theme.white};

    }
`;
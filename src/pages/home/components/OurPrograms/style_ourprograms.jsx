import styled from "@emotion/styled";
import  theme  from "design-system/config";


export const OurProgramsWrpper = styled('section')`
    label: OurProgramsWrpper; 
    padding: 5rem 0 2rem 0;
    width: 940px;
    
`;
export const  Our= styled('span')`
    label: Our;
    font-size: 2rem;
    padding-right:0.5rem;
    font-weight: bold;
    color: ${theme.secondary};
`;
export const  Programs= styled('span')`
    label: Programs;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.primaary};
    
`;
export const Discr = styled('p')`
    label: Discr;
    color: ${theme.gray};
`;
export const TabsWrapper = styled('div')`
    label: TabsWrapper;
`;
export const Wrapper = styled('div')`
    label: Wrapper;
    display: flex;
    gap: 2rem;
`;
export const TabsSpan = styled('span')`
    label: TabsSpan;
    padding: 2rem 0;
    font-weight: bold;
    cursor: pointer;

`;
export const Line = styled('div')`
    label: Line;
    background-color: ${theme.secondary};
    height: 1px;
    width: 100%;
    margin:  0 0 2rem 0;
`;
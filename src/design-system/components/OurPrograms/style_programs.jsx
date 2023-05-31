import styled from "@emotion/styled";
import theme from "design-system/config";


export const OurProgramsWrapper = styled('div')`
    label: OurProgramsWrapper; 
    display: flex;
    align-items: flex-start;
    gap: 3rem;
`;
export const Image = styled('img')`
    label: Image; 
    width: 100%;
    border-radius: 50%;
`;
export const ImageWrapper= styled('div')`
    label: ImageWrapper; 
    padding: 2rem 0;
`;
export const IconWrapper= styled('div')`
    label: IconWrapper; 
    color: ${theme.gray};
    display: flex;
    gap:1.2rem;
`;
export const Title= styled('h2')`
    label: Title; 
    color: ${theme.gray};
    margin: 0.9rem 0;
`;
export const Name= styled('span')`
    label: Name; 
    color: ${theme.gray};
    padding: 0.5rem 0;
    display: block ;
    font-size: 0.9rem
`;
export const Description= styled('p')`
    label: Description; 
    display: block ;
    line-height: 1.9;
    color: ${theme.gray};
`;
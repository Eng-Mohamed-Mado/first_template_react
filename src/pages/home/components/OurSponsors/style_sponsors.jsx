import styled from "@emotion/styled";
import theme from "design-system/config";

export const Wrapper = styled("section")`
    label: Wrapper;
    padding: 5rem 0 2rem 0;
    width: 100%;
    text-align :center;
`;
export const  FirstWord= styled('span')`
    label: FirstWord;
    font-size: 2rem;
    padding-right:0.5rem;
    font-weight: bold;
    color: ${theme.secondary};
`;
export const  ScoWord= styled('span')`
    label: ScoWord;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.primaary};
    
`;
export const DiscrSp = styled('p')`
    label: DiscrSp;
    color: ${theme.gray};
`;

export const OurSponsorWrapper = styled('div')`
    label: OurSponsorWrapper; 
    display: flex;
    align-items: center;
    gap: 1rem;
    
`;
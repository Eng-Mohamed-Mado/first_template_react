import styled from "@emotion/styled";
import theme from "design-system/config";

export const AboutWrapper = styled('section')`
    label: AboutWrapper;
    align-items: flex-start;
    padding: 5rem 0;
    display: flex;
    gap: 2rem;
`;

export const Span = styled('span')`
    label: Span;
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: ${theme.secondary};

`;
export const Pr = styled('p')`
    label: Pr;
    font-size: 1rem;
    line-height: 1.8rem;
    padding-top: 1rem;
    color: ${theme.gray};

`;
export const Div = styled('div')`
    label: Div;
    width: 50%;

`;
export const DivImag = styled('div')`
    label: DivImag;
    width: 50%;

`;
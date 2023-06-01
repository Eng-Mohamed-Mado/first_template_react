import styled from "@emotion/styled";
import theme from "design-system/config";
// import theme from "design-system/config";
import venue from 'images/img/venue-bg.jpg'

export const VenueWrapper = styled("section")`
    label: VenueWrapper;
    height: 400px;
    padding: 3rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${venue}) fixed;
`;

export const Title = styled("h2")`
    label: Title;
    color: ${theme.primaary};
    font-size: 2rem;
    font-weight: bold;
`;
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom:2rem;
    width: 400px;
    display: block;
`;
export const Span = styled("span")`
    label: Span;
    color: ${theme.secondary};
    font-size: 1rem;
    font-weight: bold;
    padding:0.5rem 0;
    display: block;
`;
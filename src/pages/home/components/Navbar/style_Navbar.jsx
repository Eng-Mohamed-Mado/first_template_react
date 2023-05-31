import styled from "@emotion/styled";
import  theme  from "design-system/config";


export const NavbarWrapper = styled('section')`
    label: NavbarWrapper; 
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    color: ${theme.white};
    background-color: ${theme.secondary};
`;

export const NavContainer = styled('div')`
    label: NavContainer; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NavTitle = styled('span')`
    label: NavTitle; 
    font-size: 1.7rem;
`;
export const NavLogo = styled('span')`
    label: NavLogo; 
    color:${theme.primaary};
`;

export const Links = styled('a')`
    label: Links; 
    font-size: 1rem;
    text-decoration: none;
    color:${theme.white};
`;

export const LinksWrapper = styled('div')`
    label: LinksWrapper; 
    display: flex;
    gap: 2rem;
    display: flex;
    align-items: center;
`;
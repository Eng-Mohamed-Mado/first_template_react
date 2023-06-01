import styled from "@emotion/styled";
import theme from "design-system/config";    

export const Wrapper = styled("section")`
    label: Wrapper;
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
`;
export const AccordionWrapper = styled("div")`
    label: AccordionWrapper;
    width: 81%;
    padding: 0px 6rem;
`

export const Item = styled("div")`
    label: Item;
    margin-bottom: 10px;
    box-shadow: 3px 4px 6px -4px ${theme.gray};
`;
export const Title = styled("div")`
    label: Title;
    display: flex;
    padding: 0 1rem;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: ${theme.secondary};
    background-color: ${theme.whiteSmoke};
`
export const H2 = styled("h2")`
    label: H2;
    font-size: 1rem;
    color: ${theme.secondary};
`
export const Content = styled("div")`
    label: Content;
    padding: 1rem;
    max-height: 0;
    overflow: hidden;
    transition: 0.6s all cubic-bezier(0,1,0,1);
    &.show{
        height: auto;
        max-height: 999px;
        transition: 0.6s all cubic-bezier(1,0,1,0);
    }
`
export const P = styled("p")`
    label: P;
   padding-bottom: 0.5rem;
    color: ${theme.overBg};
`


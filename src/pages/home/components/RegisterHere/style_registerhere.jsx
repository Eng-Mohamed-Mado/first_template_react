import styled from "@emotion/styled";
import theme from "design-system/config";
import register from 'images/img/register-bg.jpg'

export const RegisterHereWrapper = styled("section")`
    label: RegisterHereWrapper;
    height: 450px;
    padding: 3rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${register}) fixed;
`;
export const RegisterContainer = styled("div")`
    label: RegisterContainer;
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
`;
export const RegisterTitle = styled("span")`
    label: RegisterTitle;
    font-size: 2rem;
    padding-right: 0.5rem;
    color: ${theme.white}
`;

export const ColoredTitle = styled("span")`
    label: ColoredRirle;
    font-size: 2rem;
    color: ${theme.primaary}
`;
export const Text = styled("p")`
    label: Text;
    font-size: 1.5rem;
    color: ${theme.white}
`;
export const TextTwo = styled("p")`
    label: TextTwo;
    color: ${theme.gray}
`;
export const FromWrapper = styled("div")`
    label: FromWrapper;
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const RegisterInput = styled("input")`
    label: RegisterInput;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid ${theme.white};
    background-color: transparent;
    color: ${theme.white};
    ::placeholder{
        font-size: 1rem;
    }
`;

export const RegisterBtn=styled('button')` 
    label: RegisterBtn;
    font-size: 1rem;
    padding:1rem 3rem;
    border: 1px solid ${theme.primaary};
    background: ${theme.primaary};
    border-radius: 25px;
    cursor: pointer;
    color: ${theme.white};
    transition:  all 0.3s ;
    :hover{
    color: ${theme.secondary};  
    background: ${theme.white};
    border: 1px solid ${theme.white};

    }
`;
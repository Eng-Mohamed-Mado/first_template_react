import styled from "@emotion/styled";
import theme from "design-system/config";
import contact from 'images/img/contact-bg.jpg'

export const ContactWrapper = styled("section")`
    label: ContactWrapper;
    height: 600px;
    padding: 3rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(${contact}) fixed;
`;
export const Weapper = styled("div")`
    label: Weapper;
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
`;

export const  FirstWord= styled('span')`
    label: FirstWord;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.secondary};
`;
export const  ScoWord= styled('span')`
    label: ScoWord;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.primaary};
    
`;
export const  P= styled('p')`
    label: P;
    line-height: 1.3rem;
    display: block;
    width: 80%;
    color: ${theme.gray};
    
`;



export const DownloadNow=styled('button')` 
    label: DownloadNow;
    font-size: 1rem;
    padding:1rem 3rem;
    border: 1px solid ${theme.primaary};
    background: ${theme.primaary};
    border-radius: 25px;
    cursor: pointer;
    margin-top: 3rem;
    color: ${theme.white};
    transition:  all 0.3s ;
    :hover{
    color: ${theme.white};  
    background: ${theme.secondary};
    border: 1px solid ${theme.white};

    }
`;
export const FormWrapper= styled('div')`
    label: FormWrapper;
    padding: 6rem ;
    border-radius: 13%;
    background-color: ${theme.white};
    
`;
export const InputWrapper= styled('div')`
    label: InputWrapper;
    padding: 0.5rem ;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 3rem;
    border-radius: 15px;
    background-color: ${theme.white};
    
`;
export const Input= styled('input')`
    label: Input;
    font-size: 1.2rem;
    padding: 1rem;
    margin-bottom: 0.2rem;
    outline: none;
    border: none;
    background-color: ${theme.white};
`;
export const TextArea= styled('textarea')`
    label: TextArea;
    font-size: 1.2rem;
    outline: none;
    padding: 1rem;

    border: none;
    background-color: ${theme.white};
    
`;
export const SendNow=styled('button')` 
    label: SendNow;
    font-size: 1rem;
    padding:1rem 3rem;
    border: 1px solid ${theme.primaary};
    background: ${theme.primaary};
    border-radius: 25px;
    cursor: pointer;
    margin-top: 3rem;
    color: ${theme.white};
    transition:  all 0.3s ;
    :hover{
    color: ${theme.white};  
    background: ${theme.secondary};
    border: 1px solid ${theme.white};

    }
`;
import styled from "styled-components";

const ContactoContainer = styled.section` 
    text-align: center;
    
`; 

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    width: 40%;
    padding: 20px;
    margin:0 auto;
    background-color: #ff00ff;

    input {
        margin: 15px;
    }
`;

export {FormContainer, ContactoContainer}
import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContenedorEnlaces = styled.div`
    font-family: "Arimo", sans-serif;  
    `;
    
    const Enlaces = styled(Link)`
    font-size: 1.6rem;
    cursor: pointer;
    padding-left: 20px;
    margin-right: 30px;
    text-decoration: none;
`;
    
const Logo = styled.img`
    padding: 20px 0 20px 20px;
    width: 150px;
`;   
         
export {HeaderContainer,ContenedorEnlaces, Enlaces, Logo}    
    

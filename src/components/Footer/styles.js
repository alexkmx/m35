import styled from "styled-components";

const FooterContainer = styled.section`
    border-top: 1px solid black;
    margin-top: 5rem;
    padding-top: 5 rem;
    text-align: center;
`;


const GridFooter = styled.ul`
    display: flex;
    list-style-type: none;

    li {
        text-decoration: none;
        padding: 20px;
        cursor: pointer;
        text-align: center;
    }

    div {
        flex: 1;
        
    }

    div:nth-child(2) {
        flex: 2
        
    }

    div:nth-child(3) {
        
    }
`;

export {FooterContainer, GridFooter}
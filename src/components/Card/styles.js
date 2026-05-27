import styled from "styled-components";

const CardContainer = styled.section`
    display: flex;
`;

const Item = styled.div`
    background-color: #FF00FF;
    
    h3 {
        color: white;
        font-size: 1rem;
    }
    
    a {
        background-color: black;
        text-align: center;
        display: block;
        margin: 10px;
        padding: 15px;
        transition: background-color .3s ease-out;
        cursor: pointer;
        color: white;
        text-decoration: none;
    }

    img {
        height: 350px;
        object-fit: fill;
    }
`;

/*const ItemA = styled.a`
    hover{
    cursor: pointer;
    }
`;*/


export {CardContainer, Item}
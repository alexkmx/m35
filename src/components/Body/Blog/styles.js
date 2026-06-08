import styled from "styled-components";

const BlogContainer = styled.section`
    background-color: grey;
    text-align: center;
    
    `;
    
    const Card = styled.section` 
    width: 50%;
    background-color: #ff00ff;
    color: white;
    padding: 30px;
    font-size: 1.4rem;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 15px;

    h2 {
        text-align: center;
    }

    img {
        width: 50%;
        align-items: center;
    }
`;

const TextContainer = styled.div`
    text-align: justify;
    line-height: 30px;
`;

export {BlogContainer, Card, TextContainer};
import styled from "styled-components";

const PlatillosContainer = styled.section`
    background-color: grey;
    padding: 20px;
    
`;

const BotonesContainer = styled.div`
    display: flex;
    gap: 10px;
    flexWrap: wrap; 
    marginBottom: 30px; 
`;


const CardsContainer = styled.section`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    gap: 20px; 
`;

const Card = styled.article`
    border: 1px solid #ccc;
    background-color: #FF00FF; 
    padding: 10px; 
    borderRadius: 8px; 
    textAlign: center; 
`;

const Button = styled.button`
    padding: 10px 15px;
    cursor: pointer;
    background-color: categoriaSeleccionada === cat.strCategory ? #4CAF50 : #e7e7e7;
    color: categoriaSeleccionada === cat.strCategory ? white : black;
    border: none;
    border-radius: 5px;
    fontWeight: bold;
`;

const BuscadorContainer = styled.section`
    marginBottom: 30px; 
    textAlign: center;
    
    input {
        padding: 12px 20px;
        width: 100%;
        max-width: 500px;
        border-radius: 25px;
        border: 2px solid #ccc;
        font-size: 16px;
        outline: none;
    }
`;



export {PlatillosContainer, BotonesContainer, CardsContainer, Card, Button, BuscadorContainer}
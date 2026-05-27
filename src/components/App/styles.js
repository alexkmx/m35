import styled from "styled-components";



const BodyContainer = styled.div`
    background-color: grey;    
font-family: "Cousine", monospace;
  font-weight: 400;
  font-style: normal; 
`;
    


const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;
    
export { BodyContainer, CardContainer}
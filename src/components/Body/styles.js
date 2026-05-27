import styled from "styled-components";

const HeroContainer = styled.section`
img {
    width: 100%;
}

h2{
    
    font-size: 2rem;
    text-align: center;
    text-decoration: underline;
    margin: 50px 0 50px 0;
}

`
    


const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    text-align: center;
`;
    
export { HeroContainer, CardContainer}
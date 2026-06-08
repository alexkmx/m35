
import arrozconmole from "../../assets/Images/arrozconmole.jpg";
import lasagna from "../../assets/Images/lasagna.jpg";
import ratatouille from "../../assets/Images/ratatouille.webp";
import Card from "../Card/Card";
import {HeroContainer, CardContainer, Hero} from "./styles";
import resto from "../../assets/Images/resto.jpg";

const BodyComponent = () => {
    return(
        <HeroContainer>
            <Hero ><img src={resto} alt="Imagen Resto"></img></Hero>
            <h2>Nuestras recomendaciones</h2>
            <CardContainer>
                <Card 
                    
                    title={"Ver receta"} 
                    img={lasagna} 
                    text={"Cocina Italiana"}
                    receta={"recetas/52775"} 
                    
                />
                <Card 
                    title={"Ver receta"} 
                    img={ratatouille} 
                    text={"Cocina Francesa"}
                    receta={"recetas/52908"}
                />
                <Card 
                    title={"Ver receta"} 
                    img={arrozconmole} 
                    text={"Cocina Mexicana"}
                    receta={"#"}
                    
                />
            </CardContainer>
        </HeroContainer>
    )
};

export default BodyComponent;
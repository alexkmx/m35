import resto from "../../assets/Images/resto.jpg";
import arrozconmole from "../../assets/Images/arrozconmole.jpg";
import lasagna from "../../assets/Images/lasagna.jpg";
import ratatouille from "../../assets/Images/ratatouille.webp";
import Card from "../Card/Card";
import {HeroContainer, CardContainer} from "./styles";


const Body = () => {
    return(
        <HeroContainer>
            <img src={resto} alt="Perro con platos"/>
            <h2>Nuestras recomendaciones</h2>
            <CardContainer>
                <Card 
                    title={"Ver receta"} 
                    img={lasagna} 
                    text={"Cocina Italiana"}
                />
                <Card 
                    title={"Ver receta"} 
                    img={ratatouille} 
                    text={"Cocina Francesa"}
                />
                <Card 
                    title={"Ver receta"} 
                    img={arrozconmole} 
                    text={"Cocina Mexicana"}
                />
            </CardContainer>
        </HeroContainer>
    )
};

export default Body;
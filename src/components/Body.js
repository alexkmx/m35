import resto from "../assets/Images/resto.jpg";
import arrozconmole from "../assets/Images/arrozconmole.jpg";
import lasagna from "../assets/Images/lasagna.jpg";
import ratatouille from "../assets/Images/ratatouille.webp";

import body from "./css/body.css";
import Card from "./Card";

const Body = () => {
    return(
        <section className="body_container">
            <img src={resto} alt="Perro con platos"/>
            <h3>Nuestras recomendaciones</h3>
            <div className="cards_container">
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
                    title={"Cocina Mexicana"} 
                    img={arrozconmole} 
                    text={"Ver receta"}
                />
            </div>
        </section>
    )
};

export default Body;
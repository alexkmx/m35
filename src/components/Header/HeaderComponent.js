import logoch from "../../assets/Images/logoch.png";
import { HeaderContainer, Logo, Enlaces, ContenedorEnlaces } from "./styles";
//import styles from "./styles";
import Platillos from "../Body/Platillos/Platillos";
import RecetaDetalle from "../Body/Recetas/RecetaDetalle";
import Blog from "../Body/Blog/Blog";
import Contacto from "../Body/Contacto/Contacto";

const HeaderComponent = () => {
    return(
        <HeaderContainer>
            <Logo src={logoch} alt="imagen logo"/>
            <ContenedorEnlaces>
                <Enlaces to="/">Inicio</Enlaces>
                <Enlaces to="/platillos">Platillos</Enlaces>
                <Enlaces to="/recetas">Recetas</Enlaces>
                <Enlaces to="/blog">Blog</Enlaces>
                <Enlaces to="/contacto">Contacto</Enlaces>
            </ContenedorEnlaces>
        </HeaderContainer>
    )
};

export default HeaderComponent;
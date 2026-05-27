import logoch from "../../assets/Images/logoch.png";
import { HeaderContainer, Logo, Enlaces, ContenedorEnlaces } from "./styles";
//import styles from "./styles";


const Header = () => {
    return(
        <HeaderContainer>
            <Logo src={logoch} alt="imagen logo"/>
            <ContenedorEnlaces>
                <Enlaces>Platillos |</Enlaces>
                <Enlaces>Recetas |</Enlaces>
                <Enlaces>Galería |</Enlaces>
                <Enlaces>Blog |</Enlaces>
                <Enlaces>Contacto</Enlaces>
            </ContenedorEnlaces>
        </HeaderContainer>
    )
};

export default Header;
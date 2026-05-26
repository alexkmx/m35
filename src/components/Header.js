import logoch from "../assets/Images/logoch.png";
import header from "./css/header.css";


const Header = () => {
    return(
        <section className="header_container">
            <img src={logoch} alt="imagen logo"/>
            <div>
                <a>Platillos</a>
                <a>Recetas</a>
                <a>Galería</a>
                <a>Blog</a>
                <a>Contacto</a>
            </div>
        </section>
    )
};

export default Header;
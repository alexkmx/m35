import { FooterContainer, GridFooter } from "./styles";

const FooterComponent = () => {
    return(
        <FooterContainer>
            <GridFooter>
                <div>
                    <h3>Categorias</h3>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/platillos">Platillos</a></li>
                    <li><a href="/recetas">Recetas</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </div>
                <div>
                    <h3><a href="/">Sobre Nosotros</a></h3>
                    <li>Nuestra Historia</li>
                    <li>Misión</li>
                    <li>Visión y Valores</li>
                    <li>Politicas de Privacidad</li>
                    <li>Terminos del Servicio</li>
                </div>
                <div>
                    <h3><a href="/">Preguntas Frecuentes</a></h3>
                    <li>Contactanos</li>
                    <li>Confianza y Seguridad</li>
                    <li>Eventos Especiales</li>
                    
                </div>
            </GridFooter>
            <p>Todos los Derechos Reservados - Mah Xitlacuacan Cualli</p>
        </FooterContainer>
    )
};

export default FooterComponent;
import { FormContainer, ContactoContainer } from "./styles";

const Contacto = () => {
    return(
        <ContactoContainer>
            <h1>Haz tu reservación:</h1>

            <FormContainer>
                Nombre y apellido : <input type="text" placeholder="Nombre"></input>
                Ingresa tu correo electrónico: <input type="email" placeholder="e-mail"></input>
                Fecha de reservación: <input type="date" placeholder="Ingresa la fecha"></input>
                <input type="submit"></input>
            </FormContainer>
        </ContactoContainer>
    )
}

export default Contacto;
import { BlogContainer, Card, TextContainer } from "./styles";
import asada from "../../../assets/Images/asada.jpg";
import pescados from "../../../assets/Images/pescados.jpg";

const Blog = () => {
    return(
        <BlogContainer>
           <h1>Blog</h1>
           <Card>
           <h2>6 consejos utiles para asar carne</h2>
           <img src={asada} alt="Imagen de carne asada"></img>
            <TextContainer>
                <p>Lograr una carne perfectamente jugosa, suave y llena de sabor depende de unas cuantas técnicas clave. El secreto principal es sellarla a fuego muy alto para retener los jugos, seguido de una cocción precisa y el tiempo de reposo adecuado.</p>
                <p>A continuación, los trucos más efectivos para cocinar cualquier corte:</p>
           <ul>
            <li>Sácala del refrigerador:Permite que la carne tome temperatura ambiente unos 15 a 30 minutos antes de cocinarla. Esto evita un choque térmico y asegura una cocción uniforme.</li>
            <li>Sécala perfectamente: Usa papel absorbente para quitar toda la humedad de la superficie. Si está mojada, la carne se hervirá y quedará gris en lugar de dorarse</li>
            <li>Sazona en el momento justo: Aplica sal justo antes de ponerla al fuego. Si la salas mucho tiempo antes, la sal absorberá los jugos y secará la carne (a menos que estés haciendo una marinada larga).</li>
            <li>Sella a fuego fuerte: Usa una sartén bien caliente y un poco de aceite con punto de humo alto (como canola o aguacate). No muevas la carne ni le des la vuelta constantemente. Deja que se forme una costra deliciosa.</li>
            <li>Usa pinzas, no tenedores: Manipula la carne siempre con pinzas. Perforarla con un tenedor hará que todos los jugos se escapen hacia la sartén.</li>
            <li>El reposo es obligatorio: Al retirar la carne del fuego, déjala reposar en una tabla de cortar entre 3 y 5 minutos antes de cortarla. Esto permite que las fibras se relajen y los jugos se redistribuyan por toda la pieza</li>
           </ul>
            </TextContainer>
           
           </Card>
           <Card>
            <img src={pescados} alt="Imagen de pescado"></img>
            <h2>Consejos para elegir el mejor pescado</h2>
            <TextContainer>
                <p>Para elegir el pescado más fresco y de mejor calidad, el truco principal es confiar en tus sentidos: ojos brillantes, olor limpio a mar y consistencia firme al tacto. Un pescado en mal estado delata su falta de frescura de inmediato a través de la opacidad y los olores intensos.</p>
                <p>Sigue esta guía rápida para identificar un pescado en perfectas condiciones:</p>
            <ul>
                <li>Los ojos: Deben ser saltones, limpios, transparentes y brillantes. Si están hundidos, opacos o blanquecinos, el pescado no es fresco.</li>
                <li>Las agallas: Levanta la tapa de la branquia. Deben lucir de un color rojo vivo o rosa intenso, y estar libres de mucosidad pastosa. Descarta los tonos marrones o grisáceos</li>
                <li>La piel y las escamas: La piel debe tener un brillo metálico vivo. Las escamas deben estar bien adheridas al cuerpo y no desprenderse fácilmente al pasar el dedo</li>
            </ul>
            </TextContainer>
            
           </Card>
        </BlogContainer>
    )
}

export default Blog;
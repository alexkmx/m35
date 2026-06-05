import {CardContainer, Item} from "./styles";
import {Link} from "react-router-dom";

const Card = ({title, img, text, receta}) => {
    return(
        <CardContainer>
            <Item>
                <img src={img} alt={title} />
                <h3>{text}</h3>
                {receta ? (
                <Link to={receta} style={{ textDecoration: 'none', color: '#ff6b6b', fontWeight: 'bold' }}>
                    {title}
                </Link>
            ) : (
                <span style={{ color: 'gray' }}>{title}</span>
            )}
            </Item>
        </CardContainer>
     
    )
};

export default Card;
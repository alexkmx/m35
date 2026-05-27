import {CardContainer, Item} from "./styles";

const Card = (props) => {
    return(
        <CardContainer>
            <Item>
                <img src={props.img} alt={props.title} />
                <h3>{props.text}</h3>
                <a href="#">{props.title}</a>
            </Item>
        </CardContainer>
     
    )
};

export default Card;
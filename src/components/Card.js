import card from "./css/card.css";

const Card = (props) => {
    return(
        <section className="card_container">
            <div className="Item_1">
                <img src={props.img} />
                <p>{props.text}</p>
                <a>{props.title}</a>
            </div>
        </section>
     
    )
};

export default Card;
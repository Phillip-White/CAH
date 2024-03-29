import './card.css';

function Card(props) {

    return (
        <div className="card" id={props.id}>
            <p className="text">
                {props.text}
            </p>
        </div>
    );

}

export default Card;
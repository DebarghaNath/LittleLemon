import "./Card.css"
function Card(props){
    return (
        <div className="card">
            <img src={props.image} alt={props.title}/>
            <div className="card-content">
                <div className="card-header">
                    <h2>{props.title}</h2>
                    <span>{props.price}</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );

}

export default Card;
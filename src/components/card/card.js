import "./card.css"

const Card = ({bestItems}) => {

    const elements = bestItems.map(item => {
        const {src, alt, name, price, id} = item;
        return (
            <div key={id}>
                <img src={src} alt={alt}/>
                <p>{name}</p>
                <p>{price}$</p>
            </div>
        )
    })
    
    return (
        <div className="cardPossitions">
            {elements}
        </div>
    )
}

export default Card;
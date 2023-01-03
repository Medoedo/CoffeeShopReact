import "./card.css"

const Card = ({bestItems}) => {

    const elements = bestItems.map(item => {
        const {src, alt, name, price, id} = item;
        return (
            <div className="cardDesign" key={id}>
                <div className="centerItems">
                    <img src={src} alt={alt}/>
                    <p className="productName">{name}</p>
                    <p className="price">{price}$</p>
                </div>
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
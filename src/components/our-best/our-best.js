import "./our-best.css"
import Card from "../card/card";

const OurBest = ({bestItems}) => {
    return (
        <div className="ourBestBg">
            <div className="container">
                <h2>Our best</h2>
                <Card className="cardDesign" bestItems={bestItems}/>
            </div>            
        </div>
        
    )
}

export default OurBest;
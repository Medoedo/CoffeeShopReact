import "./our-best.css"
import Card from "../card/card";

const OurBest = ({bestItems}) => {
    return (
        <div className="centering">
            <h2>Our best</h2>
            <Card bestItems={bestItems}/>
        </div>
        
    )
}

export default OurBest;
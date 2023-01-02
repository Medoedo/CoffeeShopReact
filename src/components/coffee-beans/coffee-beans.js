import "./coffee-beans.css"
import bean from "./coffee-beans.png"

const Beans = () => {
    return (
        <div className="beansLine">
            <img className="bean" src={bean}  alt="Logo of beans"/>
        </div> 
    )
}

export default Beans;
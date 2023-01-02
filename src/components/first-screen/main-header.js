import "./header.css";
import Beans from "../coffee-beans/coffee-beans";
import Nav from '../nav/navigation'

const MainHeader = ({colorText, menuElem}) => {
    console.log(`MainHeader: ${colorText}`);
    return(
        <div className="header">
            <Nav 
                colorText={colorText}
                menuElem={menuElem}
            />
            <div className="wrapper">
                <h1>Everything You Love About Coffee</h1>
                <Beans/>
                <h2>We makes every day full of energy and taste<br/>Want to try our beans?</h2>
                <button>More</button>
            </div>
            
        </div>
    )
}

export default MainHeader;
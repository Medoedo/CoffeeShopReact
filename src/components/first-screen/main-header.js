import "./header.css";
import Beans from "../coffee-beans/coffee-beans";
import Nav from '../nav/navigation'

const MainHeader = ({colorText, menuElem, bean}) => {
    // console.log(bean)

    return(
        <div className="header">
            <Nav 
                colorText={colorText}
                menuElem={menuElem}
            />
            <div className="wrapper">
                <h1 className="mainHeader">Everything You Love About Coffee</h1>
                <Beans bean={bean}/>
                <h2 className="subHeader">We makes every day full of energy and taste<br/>Want to try our beans?</h2>
                <button>More</button>
            </div>
            
        </div>
    )
}

export default MainHeader;
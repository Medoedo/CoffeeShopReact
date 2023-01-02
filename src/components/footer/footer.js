import "./footer.css"
import Nav from "../nav/navigation";
import Beans from "../coffee-beans/coffee-beans";

const Footer = ({bean, menuElem}) => {

    return (
        <div className="centering footer">
            <Nav menuElem={menuElem}/>
            <Beans bean={bean}/>
        </div>
    )
}

export default Footer;
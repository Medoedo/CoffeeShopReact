import "./navigation.css"

const Nav = ({colorText, menuElem}) => {
    let classNames = "navItem navText";
    if(colorText) {
        classNames = "white navItem navText";
    }

    const elements = menuElem.map(elem => {
        const {id, link, text} = elem;
        return (
            <a key={id} className={classNames} href={link}>{text}</a>
        )
    })

    return (
        <nav className="navContainer">
            {elements}
        </nav>
    )
}

export default Nav;
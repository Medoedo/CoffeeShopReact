import "./navigation.css"

const Nav = ({colorText, menuElem}) => {
    let classNames = "navItem navText";
    if(colorText === "white") {
        classNames = "white navItem navText";
    }
    const {src, alt, link} = menuElem[0];

    const elements = menuElem.map(elem => {
        const {id, link, text} = elem;
        return (
            <a 
            key={id}
            className={classNames} 
            href={link}>
                {text}
            </a>
        )
    })

    return (
        <nav className="navContainer">
            <a href={link} className="beanLogo">
                <img src={src} alt={alt}/>
            </a>
            {elements}
        </nav>
    )
}

export default Nav;
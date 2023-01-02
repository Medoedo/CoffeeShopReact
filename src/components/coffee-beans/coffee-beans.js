import "./coffee-beans.css"

const Beans = ({bean}) => {
    const {color, src, alt} = bean;

    let classNames = "beansLine";
    if(color === "black") {
        classNames = "black beansLine";
    }
    return (
        <div className={classNames}>
            <img className="bean" src={src}  alt={alt}/>
        </div> 
    )
}

export default Beans;
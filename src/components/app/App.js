import {Component} from "react"

import './App.css';
import MainHeader from '../first-screen/main-header';
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuElem: [
        {link: "#", text: "Coffee house", src: "/photos/nav-coffee-beans.png", alt: "Beans logo in the navigation", id: 1},
        {link: "#", text: "Our coffee", src: "/photos/nav-coffee-beans.png", alt: "Beans logo in the navigation", id: 2},
        {link: "#", text: "For your pleasure", src: "/photos/nav-coffee-beans.png", alt: "Beans logo in the navigation", id: 3}
      ],
      menuElemBlack: [
        {link: "#", text: "Coffee house", src: "/photos/nav-coffee-beans-black.png", alt: "Beans logo in the navigation", id: 1},
        {link: "#", text: "Our coffee", src: "/photos/nav-coffee-beans-black.png", alt: "Beans logo in the navigation", id: 2},
        {link: "#", text: "For your pleasure", src: "/photos/nav-coffee-beans-black.png", alt: "Beans logo in the navigation", id: 3}
      ],
      colorText: {
        black: "black",
        white: "white"
      },
      bean: {
        white: {
            color: "white",
            src: "/photos/coffee-beans.png",
            alt: "Logo of beans"
        },
        black: {
            color: "black",
            src: "/photos/coffee-beans-black.png",
            alt: "Logo of beans"
        }
      },
      bestItems: [
        {src: "/photos/bestProducts/1.png", alt: "Photo of Solimo Coffee", name: "Solimo Coffee Beans 2 kg", price: 10.73, id: 1},
        {src: "/photos/bestProducts/2.png", alt: "Photo of Presto Coffee", name: "Presto Coffee Beans 1 kg", price: 15.99, id: 2},
        {src: "/photos/bestProducts/3.png", alt: "Photo of AROMISTICO Coffee", name: "AROMISTICO Coffee 1 kg", price: 6.99, id: 3}
      ]
    }
  }

  render() {
    const {colorText, menuElem, menuElemBlack, bean, bestItems} = this.state;
    const {white} = colorText;
    return (
		<div className="App">
			<MainHeader 
			    colorText={white}
                menuElem={menuElem}
                bean={bean.white}
            />
            <AboutUs bean={bean.black}/>
            <OurBest bestItems={bestItems}/>
            <Footer bean={bean.black} menuElem={menuElemBlack}/>
		</div>
    );
  }
}

export default App;

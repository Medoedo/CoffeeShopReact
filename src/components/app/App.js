import {Component} from "react"

import './App.css';
import MainHeader from '../first-screen/main-header';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuElem: [
        {link: "#", text: "Coffee house", id: 1},
        {link: "#", text: "Our coffee", id: 2},
        {link: "#", text: "For your pleasure", id: 3}
      ],
      whiteText: "white",
    }
  }

  

  render() {
    const {whiteText, menuElem} = this.state;
    return (
		<div className="App">
			<MainHeader 
			    colorText={whiteText}
                menuElem={menuElem}
            />
		</div>
    );
  }
}

export default App;

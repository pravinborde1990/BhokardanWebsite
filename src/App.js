import "./App.css";
import "../src/pages/css/style.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import initFontAwesome from "./pages/initFontAwesome";
import Profile from "./pages/AboutCity/Profile";
import { useState } from "react";
import NavBarNew from "./pages/NavBarNew";
import ShowMap from "./pages/AboutCity/ShowMap";
import 'bootstrap/dist/css/bootstrap.css';
import FeedBackForm from "./pages/FeedBackForm";
import CountDownTimer from "./pages/CountDownTimer";
initFontAwesome();

const App = () => {
	const [activeComponent, setActiveComponent] = useState(null);
  const loadChildComponent = (component) => {
    setActiveComponent(component);
  };
  const styles={backgroundimage:'HDimg.jpg.jpg'}
{/*style={{ 
	backgroundImage: 'url("https://images7.alphacoders.com/345/thumb-1920-345366.jpg")' ,width:'100%', height:'100%'
  }} */}
return <div className="app" >
		<NavBar loadChildComponent={loadChildComponent}/>
		<Home activeComponent={activeComponent}/>
		<Footer/>

		{/*<CountDownTimer/>
		<Footer/>*/}
		</div>;
}

export default App;

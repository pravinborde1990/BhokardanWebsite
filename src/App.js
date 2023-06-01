import "./App.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import initFontAwesome from "./pages/initFontAwesome";
import Profile from "./pages/AboutCity/Profile";
import { useState } from "react";
import NavBarNew from "./pages/NavBarNew";
import ShowMap from "./pages/AboutCity/ShowMap";
import 'bootstrap/dist/css/bootstrap.css';
initFontAwesome();

const App = () => {
	const [activeComponent, setActiveComponent] = useState(null);
  const loadChildComponent = (component) => {
    setActiveComponent(component);
  };

return <div className="app">
		<NavBar loadChildComponent={loadChildComponent}/>
		<Home activeComponent={activeComponent}/>
		<Footer/>
		</div>;
}

export default App;

import react, { useState } from 'react'
import Profile from './AboutCity/Profile';
const NavBar = ({ loadChildComponent }) => {
  const handleLinkClick = (component) => {
    loadChildComponent(component);
  };
    return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={() => handleLinkClick('Home')}>Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About City
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Profile')}>Bhokardan Profile</a>
            </li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Village Info')}>Village Info</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Schools')}>Schools</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Colleges')}>Colleges</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('PoliceStations')}>Police Stations</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Hospitals')}>Hospitals</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Offices')}>Administration Offices</a></li>
            <li><a className="dropdown-item" href="#" onClick={() => handleLinkClick('Banks')}>Banks</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tourism
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Tourist Places</a></li>
            <li><a className="dropdown-item" href="#">Religios Places</a></li>
            <li><a className="dropdown-item" href="#">Cultural and heritage</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notices
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Employment Notice</a></li>
            <li><a className="dropdown-item" href="#">Official Notice</a></li>
            <li><a className="dropdown-item" href="#">Event Notice</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>)
}
export default NavBar;
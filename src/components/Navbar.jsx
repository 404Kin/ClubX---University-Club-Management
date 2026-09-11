import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="CampusClub Logo" className="logo-img" />
        
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

       
        <div className="club-dropdown">
          <a href="#">Clubs ▾</a>

          <div className="dropdown-menu">
            <Link to="/clubs/ieee">IEEE</Link>
            <Link to="/clubs/computer-club">Computer Club</Link>
            <Link to="/clubs/iiucps">IIUCPS</Link>
            <Link to="/clubs/business-club">Business Club</Link>
          </div>
        </div>

        <Link to="/events">Events</Link>

        <Link to="/announcements">Announcements</Link>

        <Link to="/about">About</Link>

      </div>

      <Link to="/login" className="login-btn">
        Login
      </Link>

    </nav>
  );
}

export default Navbar;
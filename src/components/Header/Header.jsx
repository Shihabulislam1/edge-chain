import { NavLink } from "react-router-dom";

function Header() {
  return <header>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/cloud">Cloud</NavLink></li>
            
        </ul>
    </nav>
  </header>;
}

export default Header;

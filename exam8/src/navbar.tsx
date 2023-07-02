import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/Quotes" className="Contacts">
          Quotes
        </NavLink>
        <NavLink to="/add" className="About">
          Sumbit new Quote
        </NavLink>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import list from "./data/lists/list";
export function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/all" className="Contacts">
          Quotes
        </NavLink>
        <NavLink to="/add" className="About">
          Sumbit new Quote
        </NavLink>
      </ul>
    </nav>
  );
}

export function NavList() {
  return (
    <nav className="nav">
      <ul>
        <NavLink to="/all" className="Contacts">
          All
        </NavLink>
        {list.map((select) => {
          return (
            <>
              <NavLink to={`/${select.id}`} className={`${select.id}`}>
                {`${select.title}`}
              </NavLink>
            </>
          );
        })}
      </ul>
    </nav>
  );
}

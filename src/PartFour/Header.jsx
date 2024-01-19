import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>
          <Link to="/">HOME</Link>
        </p>
        
        <p>
          <NavLink
            to="/starwars"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            STARWAR
          </NavLink>
        </p>
      </div>
    </>
  );
}

export default Header;

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>
          <Link to="/">HOME</Link>
        </p>
        <p>
          <Link to="/about">ABOUT</Link>
        </p>
        <p>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            CONTACT
          </NavLink>
        </p>
        {/* since nothing link not present, so it jumps back to home ie., '/' */}
        <p>
          <Link to=".." relative="path">
            NOTHING
          </Link>
        </p>
      </div>
    </>
  );
}

export default Header;

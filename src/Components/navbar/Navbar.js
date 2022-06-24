import "./navbar.css";
import { Link } from "react-scroll";
export default function Navbar() {
  const navbar = ["Home", "Acara", "Lokasi", "Galeri Foto"];
  return (
    <nav className="navbarContainer">
      <div className="logo">
        <Link to="Home">Rahmat&Lisna</Link>
      </div>
      <div className="navLinks">
        {navbar.map(function (e, i) {
          return (
            <Link
              activeClass="active"
              to={e}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              {e}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

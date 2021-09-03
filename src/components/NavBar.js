import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navlist">
        <Link to="/home"><li>HOME</li></Link>
        <Link to="/login"><li>LOGIN</li></Link>
        <Link to="/signup"><li>SIGNUP</li></Link>  
      </ul>
    </nav>
  );
};

export default NavBar;

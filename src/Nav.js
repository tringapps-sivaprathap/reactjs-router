import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}

export default Nav;
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center sticky top-0 text-white p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <ul className="w-1/2 flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="login">Login </Link>
        </li>
        <li>
          <Link to="signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

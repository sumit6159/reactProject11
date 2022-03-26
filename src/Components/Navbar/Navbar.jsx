import { Link } from "react-router-dom";
import "./navbar.css"
 export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <div>
        <button className="home"> <Link to='/'>Home</Link>  </button> 
        <button className="history"> <Link to={`/Section/${'History'}`}>History</Link> </button> 
        <button className="mythology">  <Link to={`/Section/${'Mythology'}`}>Mythology</Link>  </button> 
        <button className="technology"> <Link to={`/Section/${'Mystery'}`}>Mystery</Link>  </button> 
        <button className="mystery">  <Link to={`/Section/${'Technology'}`}>Technology</Link> </button> 
        </div>

      </nav>
    </>
  );
};

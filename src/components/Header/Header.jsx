import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-10 justify-center">
           <NavLink to={"/"}>Home</NavLink>
           <NavLink to={"/login"}>Login</NavLink>
        </div>
    );
};

export default Header;
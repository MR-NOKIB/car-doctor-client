import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(error => console.error(error)
            )
    }

    const navItems = <>
        <li><Link className="font-bold text-base" to="/">Home</Link></li>
        <li><Link className="font-bold text-base" to="/about">About</Link></li>
        <li><Link className="font-bold text-base" to="/services">Services</Link></li>
        <li><Link className="font-bold text-base" to="/blog">Blog</Link></li>
        <li><Link className="font-bold text-base" to="/contact">Contact</Link></li>
        {user?.email ? <>
            <li><Link className="font-bold text-base" to="/bookings">Bookings</Link></li>
            <li><button onClick={handleLogOut} className="btn bg-orange-600 hover:bg-orange-400">Log Out</button> </li>
        </> :
            <li>
                <button className="btn bg-orange-600 hover:bg-orange-400">
                    <Link className="font-bold text-base" to="/login">Login</Link>
                </button>
            </li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="text-xl p-4">
                    <img className="min-h-[54px] min-w-[101px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;
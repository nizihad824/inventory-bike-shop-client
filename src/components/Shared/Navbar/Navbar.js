import React, { useContext } from 'react';
import bike from '../../assets/bike-10.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../authentication/AuthProvider';

const Navbar = () => {


    const { currentUser,logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    


    const navItems = (
        <React.Fragment>
            <li>
                <Link to="/" className="btn btn-ghost">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/myItems" className="btn btn-ghost">
                    My Items
                </Link>
            </li>
            <li>
                {<Link to="/manageItems" className="btn btn-ghost">
                    Manage Items
                </Link>}
            </li>
            <li>
                {<Link to="/addItems" className="btn btn-ghost">
                    Add Items
                </Link>}
            </li>
            {currentUser?.uid? (
        <li>
        <Link   onClick={handleLogOut} className="btn btn-ghost">
        Logout
        </Link>
            
         
        </li>
      ) : (
        <li>
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
        </li>
        )}
        </React.Fragment>
    );

    return (
        <div style={{ backgroundColor: "#485B5B" }}
        className="navbar  flex justify-between bg-white h-26 shadow-4xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div >
                <Link to="/" className="btn btn-ghost text-white font-semibold normal-case text-xl mb-3  p-1">
                MotoMajesty <br /> Palace
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end flex-none gap-2">
              
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10  rounded-full">
                           { currentUser?<img src={currentUser?.photoURL} alt='' className='h-3/4' />:
                            <img src={bike} alt='' className='h-3/4' />}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {currentUser?.uid? (
                            <li onClick={ handleLogOut}>
                                
                                    Logout
                                
                            </li>
                        ) : (
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

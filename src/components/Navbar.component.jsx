import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">IT Support</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-between">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">


                </form> */}
            </div>
        </nav>
        {/* <Link classNameNameNameName="nav-link" to="/">Home</Link>
        
        <Link classNameNameNameName="nav-link" to="/login">Login</Link>
        
        <Link classNameNameNameName="nav-link" to="/signup" >Signup</Link> */}
    </div>
);

export default Navbar;

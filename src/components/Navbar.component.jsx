import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
// import {withRouter } from 'react-router-dom'

import {LogOut} from '../util/util';


const totalLogOut = (logoutFuncFromProps) => {
    logoutFuncFromProps();
    LogOut();
    
    
}

const Navbar = ({isAuth, logout, history}) => (
    
    <div>
       

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">IT Support</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-between">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        {
                            isAuth ? (<Link className="nav-link" onClick={ () => {totalLogOut(logout); history.push('/login')}} to="#">Logout</Link>) : (<Link className="nav-link" to="/login">Login</Link>)
                        }
                        
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
        
    </div>
);



const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => {
            dispatch({type: "LOGOUT", isAuth: false})
        }
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

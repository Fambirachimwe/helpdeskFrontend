import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar.component';
import axios from 'axios';
// import {isAuthenticated}  from '../Auth/auth';
import {connect} from 'react-redux';

const LoginPage = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:4000/user/login', { username, password }).then(data => {
            if(data.data) {
                console.log(data.data.role);

                const locaStorage = window.localStorage;
                locaStorage.setItem('token', data.data.token);
               
                props.isAuth();  // dispatching action  to redux state a

                if(data.data.role === 'User'){
                    props.history.push('/home');
                } else {
                    props.history.push('/admin')
                }
                

            
                // console.log('token sent to the frontend')
                // console.log(isAuthenticated())
            }
    
        });

    }


    return (
        <div id="app">
            {/* <Navbar /> */}


            {/* <form onSubmit={handleSubmit}>
                <input type="text" id="login" name="username" value={username} onChange={handleChangeUsername} placeholder="Username" required="required" />
                <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} placeholder="Password" required="required" />
                <input type="submit" value="Log In" />

            </form> */}
            <div className="container text-center" style={{ width: "400px", marginTop: "50px"}} >
                <form className="form-signin" onSubmit={handleSubmit}>

                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={handleChangeUsername} placeholder="Username" required="" autoFocus="" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" autoComplete="on" value={password} onChange={handleChangePassword} className="form-control" placeholder="Password" required="" />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    
                </form>

                <div>
                    Don't have account? <Link to="/signup" className="bluish-text">Create Account</Link>
                </div>
            </div>



            
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      isAuth: () => {dispatch({type: "LOGGED_IN", isAuth: true})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));

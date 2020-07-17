import React, { useState } from 'react';
import Navbar from '../components/Navbar.component';
import { Link, withRouter } from 'react-router-dom';

import axios from 'axios';

const Signup = ({ history }) => {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [cornfirmPassword, setCornfirmPassword] = useState("");


    // handlers 
    const handleChangeName = (event) => {
        setUsername(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }



    const handleSubmit = (event) => {

        axios.post("http://127.0.0.1:4000/user/signup", { username, email, password }).then(data => {
            console.log(data.data)
            alert('signup success please Login');
            history.push('/login')
        })

        setUsername("");
        setEmail("")
        setPassword("")
        event.preventDefault();

    }




    return (
        <div>
            <Navbar />

            <h5>Register</h5>

            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" value={username} onChange={handleChangeName} placeholder="Name" required="required" />
                <input type="email" id="login" name="email" value={email} onChange={handleChangeEmail} placeholder="Email" required="required" />
                <input type="password" id="password" name="password" value={password} onChange={handleChangePassword} placeholder="Password" required="required" />
                <input type="submit" value="Sign Up" className="fadeIn fourth" />
            </form>

            
            <div>Already have account? <Link to="/login" className="bluish-text">Login</Link></div>

        </div>
    )




};


export default withRouter(Signup);


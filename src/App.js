import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/HomePage.pages';
import LoginPage from './pages/loginPage.pages';
import Signup from './pages/signup.pages';
import UserHomepage from './pages/userHome.pages';
import ProtectedRoute from './components/protected.route';
import axios from 'axios';


import {connect} from 'react-redux';



class App extends React.Component{
  
  componentDidMount(){
    const config = {
      headers: {
        "X-Auth-Token": window.localStorage.getItem('token')
      }
    }
    axios.get('http://127.0.0.1:4000/app/tickets', config).then(data => {
      this.props.getTickets(data.data.tickets)
    })
  }


  render(){
    const {isAuth} = this.props;
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute isAuth={isAuth} exact path="/home" component={UserHomepage} />
        </Router>
        
      </div>
    );
  }
  
 
}

const mapStatetoProps = (state) =>{
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: (data) => { dispatch ({ type: "GET_USER_TICKETS", tickets: data})}
  }
}



export default connect(mapStatetoProps, mapDispatchToProps)(App);

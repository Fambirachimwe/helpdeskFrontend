import React from 'react';
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import Homepage from './pages/HomePage.pages';
import LoginPage from './pages/loginPage.pages';
import Signup from './pages/signup.pages';
import UserHomepage from './pages/userHome.pages';
import ProtectedRoute from './components/protected.route';
import axios from 'axios';
import {getLocalStorage} from './util/util'
import {connect} from 'react-redux';

import {store} from './stateManagement/store';



class App extends React.Component{
  
  componentDidMount(){

   
    if(getLocalStorage()){
        store.dispatch({type: "LOGGED_IN", isAuth: true});  
    }
  }


  render(){
    // const {isAuth} = this.props;
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />

          <ProtectedRoute isAuth={this.props.isAuth}>
            <Route exact path="/home" component={UserHomepage} />
          </ProtectedRoute>
          
        </Router>
        
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return {
    ...state
  }
}



export default connect(mapStateToProps)(App);

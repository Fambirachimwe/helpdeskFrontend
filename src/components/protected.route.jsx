import React, { useState, useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import {isAuthenticated} from '../Auth/auth';

class ProtectedRoute extends React.Component{


  // shouldComponentUpdate() {
  //   console.log('protectedRoute - shouldComponentUpdate lifecycle');

  //   return false;
  // }

  render(){

    const { component: Component, isAuth, ...rest } = this.props;
    console.log(isAuth);
    return (
      <Route {...rest}

        render={

          (props) => (
            isAuth === true ? <Component {...props} />

              : <Redirect to="/login" />
          )

        } />
    )
  }
}

// const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {

//   const [auth, setAuth] = useState(false);
//   console.log(isAuth )

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if(token){
//       setAuth(true);
//     }
//   });

//   return (
//     <Route {...rest}

//       render={

//         (props) => (
//           isAuth === true ? <Component {...props} />

//             : <Redirect to="/login" />
//         )

//       } />
//   )


// }

const mapStateToProps = (state) => {
  return {
    ...state
  }
}


export default connect(mapStateToProps)(withRouter(ProtectedRoute));


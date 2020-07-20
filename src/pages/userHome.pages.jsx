import React from "react";
import Navbar from "../components/Navbar.component";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddTicket from '../components/addTicket.component';
import MyTickets from '../components/myTickets.component';
import axios from 'axios';

import {getLocalStorage} from '../util/util'

import { connect} from 'react-redux'



class UserHomepage  extends React.Component{

  componentDidMount(){
    const config = {
      headers: {
        "X-Auth-Token": getLocalStorage()
      }
    }
    axios.get('http://127.0.0.1:4000/app/tickets', config).then(data => {
      this.props.getTickets(data.data.tickets)
    })
  }


  // chechAuth(){
    
  // }


  render(){

    

    return (



      <div>
        <Navbar />
    
        <Router>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/home">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Dashboard <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                         <Link to="/add-ticket">Add Ticket</Link>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Knowledge Base
                </Link>
                  </li>
               
                </ul>
    
    
    
              </div>
            </nav>
    
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor" style={{ position: "absolute", left: "0px", top: "0px", right: "0px", bottom: "0px", overflow: "hidden", pointerEvents: "none", visibility: "hidden", "zIndex": -1 }}><div className="chartjs-size-monitor-expand" style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none", visibility: "hidden", "zIndex": -1 }}><div style={{ position: "absolute", width: "1000000px", height: "1000000px", left: 0, top: 0 }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, overflow: "hidden", pointeEvents: "none", visibility: "hidden", "zIndex": -1 }}><div style={{ position: "absolute", width: "200%", height: "200%", left: 0, top: 0 }}></div></div></div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>
    
              <Route  path="/add-ticket" component={AddTicket} />
              <Route path="/home" component={ MyTickets } />
             
            </main>
          </div>
        </div>
      
    
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

const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: (data) => { dispatch ({ type: "GET_USER_TICKETS", tickets: data})},
   
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHomepage);

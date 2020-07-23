import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const MyTickets = ({ tickets }) => (


  <div>
    {/* {
        console.log(tickets)
      } */}
    <h4>My Tickets</h4>
    <br />
    <br />
    <div className="table-responsive" style={{ width: "90%" }}>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Edit</th>
            
          </tr>
        </thead>
        <tbody>
          {
            tickets !== undefined ? (
              tickets.map(ticket => (

                <tr key={ticket._id}>
                  <td>{ticket._id}</td>

                  <Link to={`/home/${ticket._id}`}>
                    <td>{ticket.title}</td>
                  </Link>

                  <td>{ticket.priority}</td>
                  <td><span class="badge badge-warning">{ticket.status}</span></td>
                  
                </tr>
              ))
            ) : (null)

          }
         
        </tbody>
      </table>
    </div>
  </div>

);


const mapStateToProps = (state) => {
  return {
    ...state
  }
}



export default connect(mapStateToProps)(MyTickets);

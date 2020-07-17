import React from 'react';
import { connect } from 'react-redux';


const MyTickets = ({tickets}) => (

   
    <div>
      {/* {
        console.log(tickets)
      } */}
    <h4>My Tickets</h4>
             <br/>
             <br/>
             <div className="table-responsive" style={{width: "90%"}}>
               <table className="table table-striped table-sm">
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>Title</th>
                     <th>Priority</th>
                     <th>Status</th>
                   </tr>
                 </thead>
                 <tbody>
                   {
                     tickets !== undefined ? (
                       tickets.map(ticket => (
                       <tr key={ticket._id}>
                         <td>{ticket._id}</td>
                         <td>{ticket.title}</td>
                         <td>{ticket.priority}</td>
                         <td>{ticket.status}</td>
                       </tr>
                       
                     ))
                     ) : (null)
                     
                   }
                   {/* <tr>
                     <td>1,001</td>
                     <td>Lorem</td>
                     <td>ipsum</td>
                     <td>dolor</td>
                   </tr> */}
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

import React from 'react';
import { connect } from 'react-redux';

const TicketDetailPage = ({ tickets }) => (

    <div className="details">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h4>
                            <div class="mb-2">#Ticket ID - {tickets._id}</div>
                            <hr></hr>

                            <h5>Title</h5>
                            {tickets.title}
                        </h4>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 card">
                        <div class="timeline">
                            <div class="time-label">
                                <span class="bg-red">{tickets.dateCreated}</span>
                            </div>
                            <div>
                                <i class="fa fa-envelope bg-blue"></i>
                                <div class="timeline-item"><span class="time float-right">
                                    {/* timestamp */}
                                    <i class="fa fa-clock-o"></i> 3 months ago</span> 

                                    <h3 class="timeline-header">
                                        <a href="#">{tickets.user}</a> sent you a ticket for support
                                        </h3>
                                    <div class="timeline-body">
                                        <h4>Description :</h4>
                                        <p>{tickets.description}</p>

                                        <h4>Attachments</h4>
                                        <img src={`http://127.0.0.1:4000/${tickets.attachment}`} alt="" />
                                        {/* C:\Users\user\Desktop\Helpdesk\backend\uploads\580b57fcd9996e24bc43c210.png */}
                                    </div>
                                    <div class="timeline-footer">
                                        Status: <span class="badge bg-primary text-white">{tickets.status}</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div></div>
        </section>
    </div>
);


const mapStateToProps = (state, ownProps) => {
    const ticketId = ownProps.match.params.id;

    return {
        ...state,
        tickets: state.tickets.find(ticket => ticket._id === ticketId)
    }
}


export default connect(mapStateToProps)(TicketDetailPage);





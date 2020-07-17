import React, {useState} from 'react';
import axios from 'axios';
import {getToken} from '../Auth/auth';
import { connect } from 'react-redux';

const AddTicket = ({updateState}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [attachment, setAttachment] = useState(null);

    const handleTitle =(evt) => {
        setTitle(evt.target.value);
    }
    const handleDescription = (evt) => {
        setDescription(evt.target.value)
    }

    // const handleAttachment = (evt) => {
    //     setAttachment(evt.target.files[0]);
    // }

    const handleSubmit = (evt) => {

        evt.preventDefault();
        const token = window.localStorage.getItem('token');
        // console.log(attachment)
        const config = {
            headers: {
                // 'content-type': 'multipart/form-data',
                'X-Auth-Token': token
            }
        };
     

        axios.post("http://127.0.0.1:4000/app/tickets", { title, description }, config).then(data => {
            console.log(data);  //dispatch a change to redux 

            updateState(data); 
            
            setTitle("");
            setAttachment("")
        });

        


        // console.log(data);
        // axios.post("http://127.0.0.1:4000/app/tickets/", {title, description, token}).then(response => {
        //     console.log(response);
        // });
        
        
    
       
    }

    return (
        <div>
        <h5>Add Ticket</h5>

        <br />
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" value={title} onChange={handleTitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" value={description} onChange={handleDescription} id="exampleFormControlTextarea1" rows="3"></textarea>

                {/* atttachment field */}
                {/* <label htmlFor="exampleFormControlFile1">Attachement</label> */}
                {/* <input type="file" name="attachment" onChange={handleAttachment} className="form-control-file" id="exampleFormControlFile1"></input> */}
                {/* <small id="emailHelp" className="form-text text-muted">Add Screen Shot of the error Mesage</small> */}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
    
};


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState : (data) => {dispatch ({type: "UPDATE_STATE", ticket: data})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket);

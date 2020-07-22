import React, {useState} from 'react';
import axios from 'axios';
import {getLocalStorage, multipartRequest} from '../util/util'
import { connect } from 'react-redux';


// using xmlHttp request 
// const sendHttpRequest = (method, url, data, Authheader) => {

//     const promise = new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url, data)
//         xhr.setRequestHeader(Authheader, getToken())
//         xhr.responseType = 'json';
//         xhr.onload =() => {
//             resolve(xhr.response);
//         }

//         xhr.send()

//     })
//     return promise;
    
// }


const AddTicket = (props) => {
    // console.log(props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [attachment, setAttachment] = useState(null);

    const handleTitle =(evt) => {
        setTitle(evt.target.value);
    }
    const handleDescription = (evt) => {
        setDescription(evt.target.value)
    }

    const handleAttachment = (evt) => {
        setAttachment(evt.target.files[0]);
    }

    const handleSubmit = (evt) => {

        evt.preventDefault();
        const token = getLocalStorage() ;
        const formData = new FormData();
        formData.append('title', title);
        formData.append("description", description);
        formData.append("attachment", attachment)

        axios({
            url: "http://127.0.0.1:4000/app/tickets",
            method: "POST",
            data: formData,
            headers: {
                "content-type": "multipart/form-data",
                "X-Auth-Token": token
            }
        }).then(data => {
            // console.log(data);
                props.updateState(data.data.data); 
                alert('ticket added sucessfully ');
                setTitle("");
                setDescription("")
        })  
 
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

                <label htmlFor="exampleFormControlFile1">Attachement</label>
                <input type="file" name="attachment" onChange={handleAttachment} className="form-control-file" id="exampleFormControlFile1"></input>
                <small id="emailHelp" className="form-text text-muted">Add Screen Shot of the error Mesage</small>
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

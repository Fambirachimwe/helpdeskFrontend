import React, {useState} from 'react';
import axios from 'axios';
import {getToken} from '../Auth/auth';
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
    // const [attachment, setAttachment] = useState(null);

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

        
     

<<<<<<< HEAD
        axios.post("http://127.0.0.1:4000/app/tickets", { title, description, attachment }, config).then(data => {
            console.log(data);  //dispatch a change to redux 
            updateState(data);  //////  ////   
=======
        axios.post("http://127.0.0.1:4000/app/tickets", { title, description }, config).then(data => {
            console.log(data.data.data)
            
            props.updateState(data.data.data); 
            alert('ticket added sucessfully ');
            
>>>>>>> 0fcdb35584277ee9db42c137997cf0b1fcba454c
            setTitle("");
            setDescription("")
            // setAttachment("")
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

import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Queue from "./Queue.js";


import  db  from "./config.js";

import { query, ref, set, onValue, orderByKey, push, limitToFirst, remove } from "firebase/database";



function Form() {
    
    let navigate = useNavigate();

    var values = {userName: "", utEID: ""};

    const [formValues, setValues] = useState(values);

    const handleChange = (e) => {
        setValues({ ...formValues, [e.target.name]: e.target.value});
    }

    
    const handleQueue = (e) => {
        e.preventDefault();

            // adds data to database 
             const postListRef = ref(db, 'users/');
             const newPostRef = push(postListRef);
             set(newPostRef, {
                name: formValues.userName,
                id: formValues.utEID 
             });
        navigate('/results');    
    }
    



return (
    <div className='ham'>
    <form>
    <pre>{JSON.stringify(formValues)}</pre>
        <h1 className="Header">
            Welcome to WHO GOT NEXT?
        </h1>
        <div className="field">
            <label>
                Name: 
            </label>
            <br></br>
            <input
            type="text"
            name="userName"
            placeholder="eg: Johnny Appleseed"
            value = {formValues.name}
            onChange = {handleChange}
            />
        </div>

        <div className="field">
            <label>
                UT EID: 
            </label>
            <br></br>
            <input
            type="text"
            name="utEID"
            placeholder="eg: sc67463"
            value = {formValues.utEID}
            onChange = {handleChange}
            />
        </div>
        <button type = "submit" className="queue" onClick={handleQueue}>Queue</button>
    </form>
    </div>
)
}

// 
export default Form;

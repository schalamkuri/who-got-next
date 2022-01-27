import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Queue from "./Queue.js";


import  db  from "./config.js";

import { query, ref, set, onValue, orderByKey, push, limitToFirst, remove } from "firebase/database";



function Form() {


    //const users = query(ref(db, 'users/'), orderByKey(), limitToFirst(1));



    //var ref = db.ref("/");
    //var rootRef = db.ref();
    //var playersRef = db.ref("/users/");
    /*
    playersRef.orderByKey().on("child_added", function(data) {
        console.log(data.key);
    });
    */

    //const ham = db.child("users").orderByKey().limitToLast(10);

    //, orderByKey()

    


    /*
    
    onValue(users, (snapshot) => {
        const data = snapshot.val();
        //updateStarCount(postElement, data);
        console.log(data);
    });
    */



    
    let navigate = useNavigate();

    //const list = new Queue();
    /*
    
    const {state} = useLocation();
    const {queue} = state;

    var list = new Queue(queue);
    */

    

    var values = {userName: "", utEID: ""};

    const [formValues, setValues] = useState(values);

    const handleChange = (e) => {
        setValues({ ...formValues, [e.target.name]: e.target.value});
    }

    
    const handleQueue = (e) => {
        e.preventDefault();

        // add to queue
    
        //list.enqueue(formValues);

        //console.log(list);

        // send list to results page
        
        /*
            db.ref('/').push({ 
              name: 'sai',
              age: 19,
             });
             */

            // adds data to database 
             const postListRef = ref(db, 'users/');
             const newPostRef = push(postListRef);
             set(newPostRef, {
                name: formValues.userName,
                id: formValues.utEID 
             });
             /*
             set(ref(db, 'users/' + formValues.userName), {
                 name: formValues.userName,
                 id: formValues.utEID 
            });
            */


        //navigate('/results');
        navigate('/results');
        //, { state: {queue: list}}
         
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

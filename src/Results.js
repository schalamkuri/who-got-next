import { useLocation } from "react-router-dom";
import Queue from "./Queue.js";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useLayoutEffect } from 'react';

import  db  from "./config.js";

import './Results.css';

import Temp from './Temp';

import { query, ref, set, onValue, orderByKey, push, limitToFirst, remove, get, child } from "firebase/database";
import { render, waitFor } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

function Results() {    

    const [items, setItems] = useState([]);
    const [keys, setKeys] = useState([]);
    /*
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
           setLoading(false)
        }, 3000)
  
      }, []);
      */

    let navigate = useNavigate();


    // do i need to make separate variables of the same thing??
    
    var temp = query(ref(db, 'users'));
    // , orderByKey()

    let array = [];
    let keyArray = [];
    useEffect(() => {
        onValue(temp, (snapshot) => {
            
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                var name = snap.val()["name"];
                array.push(name);
                //console.log(snap.key);
                keyArray.push(snap.key);
            });
            setItems({ items: array });
            setKeys( {keys: keyArray});
          });
          //console.log(items.items);
      }, []);
    

    /*
const dbRef = ref(db);
get(child(dbRef, `users/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
*/
    /*
    const dbRef = ref(db);
    get(child(dbRef, `users/`))
    .then((snapshot) => {
        
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            //var name = childData["name"];
            //console.log(name)
            //console.log(name);
            //array.push(name);
            //test.push("shite");
            //.log(childData)
        

          });

    }).catch((error) => {
        console.error(error);

    });
    */

    //console.log("this should come after");
    
    // THE RIGHT ONE
    //function ham () {
        /*
        let array = [];
        onValue(temp, (snapshot) => {
            exists = true;
            //data = JSON.parse(JSON.stringify(snapshot.val()));
            //sleep(5000);
            //setTimeout(2000);
            //console.log("ham");
            //
            snapshot.forEach(function(childSnapshot) {
                
                //console.log("ham");
                var childData = childSnapshot.val();
                var name = childData["name"];
                var ayo = childSnapshot.val()["name"]
                array.push(name);

                //addItem();
                //console.log(ayo);
                
                //
                //.log(childData)
                //return array;
              });
              
        });
*/

function viewQueue() {
    
}
        

/*
        for(var i = 0; i < array.length; i++){
            setItems([...items, {id: i, value: array[i]}]);
        }
        */
       /*
        const viewQueue = () => {
            for(var i = 0; i < items.length; i++){
            setItems([...items, {id: array.length, value: array[0]}])
            }
        }
        */
        //return true;

    //}

    // learn how to parse and store json data to display

    

    /*
    for (var key in data){
        console.log(key);
        for(var prop in key){
            console.log(prop);
        }
    }
    */
    /*
    for (var key of Object.keys(data)) {
        //var info = JSON.parse(JSON.stringify(data[key]));
        console.log("reached");
        console.log(key + " -> " + key.data)
        for(var prop in key){
            console.log(prop + " " + key[prop] );
        }

    }
    */
    
/*
    data.forEach((item) => {
        console.log('ID: ' + item.id);
        console.log('NAME: ' + item.name);
      });
    */
   /*
    for(var i = 0; i < data.size; i++) {
        var obj = data[i];
    
        console.log(obj.name);
    }
    */
    
    
    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
        // , { state: {queue: list}}
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    var key;
    const handleDequeue = (e) => {
        //e.preventDefault();
        console.log(keys.keys[0]);
        // get key of first element
        /*
        onValue(temp, (snapshot) => {
            snapshot.forEach(function(childSnapshot) {
                key = childSnapshot.key; // "ada"
                // Cancel enumeration
                console.log(key);
                return true;
            });
        });
        */
        remove(ref(db, 'users/' + keys.keys[0]));
        window.location.reload(false);
        
        //remove(ref(db,`users/${key}`));
        //sleep(2000).then(() => {  });
        
        
        /*
        var temp = query(ref(db, 'users/'), limitToFirst(1));
        //console.log((ref(db, 'users/'), limitToFirst(1).key));

        //remove(ref(db, 'users/'), limitToFirst(1));

        onValue(temp, (snapshot) => {
            const data = snapshot.key;
            //console.log(first);
            
            //updateStarCount(postElement, data);
            console.log(data);
        });
        */
        /*
        let [first] = "";
        
        onValue(temp, (snapshot) => {
            const data = snapshot.val();
             first = Object.keys(data);
            //console.log(first);
            
            //updateStarCount(postElement, data);
            //console.log(data);
        });
        */
        //remove(ref(db, 'users/' + first));
        //console.log(temp);
    }

    const handleClearAll = (e) => {
        //e.preventDefault();
        remove(ref(db, 'users/'));

    }


    /*
    
    */
        
    //return divStuff();

    /*
     if(!loading){
        return <div>loading...</div> 
     }
*/
// <button onClick={viewQueue}>View Queue</button> 
    var shite = ["sai","prathik","kutty"];
    console.log(array);

    
     return (
            <div className="list">
            <h1>Queue: </h1>
            <pre>{JSON.stringify(items)}</pre>
            <pre>{JSON.stringify(keys)}</pre>
            
            <ol>
                {
                    (items.items || shite).map((item) => <li>{item}</li>)
                }
            </ol>
            <button onClick={handleBack}>go back</button>
            <button onClick={handleDequeue}>dequeue</button>
             <button onClick={handleClearAll}>clear all</button>
        </div>
     )
}

export default Results;
/*
<pre>{JSON.stringify(shite)}</pre>
<pre>{JSON.parse(JSON.stringify(items.items))}</pre>
<ol>
                {
                    (items.items && items.items).map((item) => <li>{item}</li>)
                }
            </ol>


<ul>
            {
                items.map((item) => <li key = {item.id}>{item.name}</li>)
            }
        </ul>

<ul>
                {
                    items.map((reptile) => <li>{reptile}</li>)
                }
            </ul>
*/


//<ul>{listItems}</ul>
    /*
    let navigate = useNavigate();

    const list = new Queue();


    const {state} = useLocation();
    const {userName, utEID} = state;

    //sessionStorage.setItem(userName, utEID);
    sessionStorage.setItem(userName, sessionStorage.length)

    console.log("local storage");
    for (var i = 0; i < sessionStorage.length; i++)   {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]")
    }
    

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleDequeue = (e) => {
        e.preventDefault();
        if(sessionStorage.length == 1){
            sessionStorage.clear();

        } else{
        var lowest = sessionStorage.length + 10;
        for (var i = 0; i < sessionStorage.length; i++)   {
            var curr = sessionStorage.getItem(sessionStorage.key(i));
            if( curr < lowest){
                lowest = curr;
            }
        }
        for (var i = 0; i < sessionStorage.length; i++)   {
            var temp = sessionStorage.getItem(sessionStorage.key(i));
            if( lowest == temp){
                sessionStorage.removeItem(sessionStorage.key(i));
                break;
            }
        }
    }
    }

    const handleClearAll = (e) => {
        e.preventDefault();
        sessionStorage.clear();
    }



return (
<div>
    hi
    <button onClick={handleBack}>go back</button>
    <button onClick={handleDequeue}>dequeue</button>
    <button onClick={handleClearAll}>clear all</button>
</div>)
}

*/


/*
    var user = {
        newUserName: userName,
        newUserID: utEID
    }

    list.enqueue(user);
    

    var name = userName;
    var id = utEID;

    console.log(list);
    */

    /*
    const {state} = useLocation();
    const {queue} = state;

    var list = queue;

    console.log(list);
    */
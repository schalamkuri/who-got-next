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
   
    let navigate = useNavigate();
    
    var temp = query(ref(db, 'users'));

    let array = [];
    let keyArray = [];
    useEffect(() => {
        onValue(temp, (snapshot) => {
            
            snapshot.forEach(snap => {
                var name = snap.val()["name"];
                array.push(name);
                keyArray.push(snap.key);
            });
            setItems({ items: array });
            setKeys( {keys: keyArray});
          });
      }, []);
    
    const handleBack = (e) => {
        e.preventDefault();
        navigate('/');
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    var key;
    const handleDequeue = (e) => {
       
        console.log(keys.keys[0]);
        
        remove(ref(db, 'users/' + keys.keys[0]));
        window.location.reload(false);
        
    }

    const handleClearAll = (e) => {
        remove(ref(db, 'users/'));

    }
    
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

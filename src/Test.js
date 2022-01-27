import React from 'react';
import './App.css';
//Calling Firebase config setting to call the data
//import firebase from './Firebase';
import { query, ref, set, onValue, orderByKey, push, limitToFirst, remove } from "firebase/database";
import  db  from "./config.js";
import { useNavigate } from 'react-router-dom';


class Test extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    //let navigate = useNavigate();

    //this.handleClick = this.handleClick.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    }
    
  componentDidMount() {
   
    
     
    
    
 }

 
 handleBack = (e) => {
    //e.preventDefault();
    let navigate = useNavigate()
    //navigate.navigate('/');
    console.log("jam");
    // , { state: {queue: list}}
}
  
  render(){
  return (
    <div className="MainDiv">
        <pre>{JSON.stringify(this.state.studentslist)}</pre>
      <div class="jumbotron text-center bg-sky">
          <h3>In Queue:</h3>
      </div>
      <button onClick={this.handleBack}>go back</button>
      <ul>
          {
          this.state.studentslist.map((reptile) => <li>{reptile}</li>)
          }
    </ul>
    </div>
  );
}
}
export default Test;

import './App.css';
import Form from './Form';
import Temp from './Temp';
import Results from './Results';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Queue from "./Queue.js";

import Test from './Test';



function App() {
  sessionStorage.clear();
 return (
 <Router>
   <Routes>
     <Route path="/" element = {<Form/>}/>
     <Route path="/results" element = {<Results/>}/>
     <Route path="/test" element = {<Test/>}/>
   </Routes>
 </Router>
 )
}

/*
<Link to='/'
     state={{ queue: list }}
     element = {<Form/>}
     ></Link>
*/
// <Route path="/" element = {<Temp/>}/>
export default App;


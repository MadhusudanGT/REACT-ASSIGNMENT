import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import content from './components/content'
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import home from './components/home';



function App() {
  return (
   
 <Router>
   <div className="container">
<p>WELCOME TO REACT BASE APP</p>
 {/* <nav>
    <ul>
      <li>
        </li>
        <Link to="/">HEADER</Link>
        </ul>
        </nav> */}
   <Switch>
     <Route path="/" component={home}/>
   <Route path="/header" component={Header} />
   <Route path="/footer" component={Footer} />
   <Route path="/content" component={content} />
 
   </Switch>
   </div>
 </Router>
 
  );
}

export default App;

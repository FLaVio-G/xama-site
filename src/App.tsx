import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home"
import Header from './components/Header';
import { GlobalStyle } from "./styles/global";


function App(){
  return (

   <Router>
     <Header/>
     <Routes>
       <Route path = "" element = {<Home/>} />
     </Routes>
     <GlobalStyle/>

   </Router>
  );
};

export default App;
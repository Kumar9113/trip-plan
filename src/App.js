
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import About from "./Routes/About";
import { Route,Routes } from "react-router-dom";

import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Service' element={<Service></Service>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route> 
      </Routes>
      
      
     
      
      
     
    </div>
  );
}

export default App;

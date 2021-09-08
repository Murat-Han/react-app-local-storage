import React from 'react';
import { Navbar } from "react-bootstrap";
import HomeScreen from "./components/ButtonBar";

function App() {
  
  return (
    <div >
      <Navbar bg="primary" variant="dark" >
        <div className="w-100 text-center bg-blue">
          <Navbar.Brand href="#home"className="text-center"> React Local Storage</Navbar.Brand>
        </div>
      </Navbar>
      <div className="w-100 text-center bg-blue">
      <HomeScreen />
      </div>
     
    </div>
  );
}

export default App;

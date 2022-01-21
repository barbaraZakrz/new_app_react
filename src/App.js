import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert("Hello");
}



function App() {
  return (
   <div className="App">
      <Header info="this is my message" myNumber = "7" />
      
      <p>  main content </p>
      <Footer trademark="page by me"
      myalert={createAlert} />
      </div>
    
  );
}

export default App;

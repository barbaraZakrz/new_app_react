import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
   <div className="App">
      <Header info="this is my message" myNumber = "7" />
      <Header info="this is My message" myNumber ="4" />
      <p>  main content </p>
      <Footer trademark="page by me"/>
      </div>
    
  );
}

export default App;

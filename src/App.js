import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert("Hello");
}

function ShowMessage(props){
  if(props.toShow){
    return <h2>My message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
  
}

function App() {
  return (
   <div className="App">
      <Header info="this is my message" myNumber = "7" />
      
      <p>  main content </p>
      <Footer trademark="page by me"
      myalert={createAlert} />
      <ShowMessage toShow={false}/>
      </div>
    
  );
}

export default App;

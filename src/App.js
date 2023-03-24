import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
      const [mode, setMode] =useState('light'); 
      const [alert, setAlert] =useState(null); 
    
      const showAlert = (message,type ) =>{
        setAlert ({
          msg : message,
          type: type
        })
        setTimeout(() => {        
          setAlert (null);
        }, 1500);
      } 
     const toggleMode =()=>{
        if(mode === 'light'){
          setMode  ('dark');
          document.body.style.backgroundColor = 'grey';
          showAlert ('Dark mode has been enabled', 'success');
          document.title = "Textutilis - Dark Mode";
          // setInterval(() => {
          //   document.title = "Textutilis ia Amazing Mode";
          // }, 2000);
        }
        else{
          setMode ('light');
          document.body.style.backgroundColor = 'white';
          showAlert ('light mode has been enabled', 'success');
          document.title = "Textutilis - Light Mode";
        }
      }
 return (
  <>
   <Router>
    <Navbar title = "TextUtilis" mode= {mode} toggleMode = {toggleMode} /> 
    <Alert alert = {alert}/>
  
      <div className="container my-3" >
   <Routes>
          <Route exact path="/About" element = {<About/>} >
                    
          </Route>
          
          <Route exact path="/" element={<TextForm  showAlert = {showAlert} heading= "Enter the text to Analyze below" mode= {mode} /> }>
  {/* <TextForm  showAlert = {showAlert} heading= "Enter the text to Analyze below" mode= {mode} />     */}
          </Route>
   </Routes>

  </div>
  </Router>
</>


  );

}

export default App;

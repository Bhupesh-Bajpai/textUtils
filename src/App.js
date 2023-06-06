
import './App.css';
import About from './modules/About';
import Alertcomp from './modules/Alertcomp';
import NavbarComponent from './modules/NavbarComp';
import TextBar from './modules/TextBar';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light')

  const [alert,setAlert] = useState('','')

  // const [alertSts,setAlertSts]=useState(false)

  const showAlert=(message,status)=>{
    setAlert({
      msg:message,
      sts:status
    })
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#453676';
      showAlert("Dark mode enable","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enable","success")
    }
  }
  return (
 <div className='main'>
   <Router>
   <NavbarComponent title="TextUtils" about="aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
  {/* {alertSts && <Alertcomp alert={alert}/>} */}
  <Alertcomp alert={alert}/>
  <Routes>
     <Route path="/about" element={<About/>} /> 
     <Route path="/textbar" element={<TextBar heading="Please type your text here" mode={mode}/>} /> 
    </Routes>
   </Router>

  
 </div>
  );
}

export default App;

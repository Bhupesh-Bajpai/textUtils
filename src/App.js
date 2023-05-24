
import './App.css';
import NavbarComponent from './modules/NavbarComp';
import TextBar from './modules/TextBar';
import React from 'react';
import { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#453676';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
 <div className='main'> 
  <NavbarComponent title="TextUtils" about="aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
  <TextBar heading="Please type your text here" mode={mode}/>
 </div>
  );
}

export default App;

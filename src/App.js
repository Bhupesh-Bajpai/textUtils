
import './App.css';
import NavbarComponent from './modules/NavbarComp';
import TextBar from './modules/TextBar';


function App() {
  return (
 <div className='main'> 
  <NavbarComponent title="TextUtils" about="aboutTextUtils"/>
  <TextBar heading="Please type your text here"/>
 </div>
  );
}

export default App;

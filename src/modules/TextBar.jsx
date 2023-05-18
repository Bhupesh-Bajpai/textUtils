import React,{useState} from "react";
import './TextBar.css'



export default function TextBar(props){
    const [text,setText] = useState("I am new user")

    const handleUpClick = ()=>{
        console.log("upclick button press");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick = ()=>{
        console.log("upclick button press");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCountLetter= ()=>{
        console.log("upclick button press");
        let x = text.length
        alert("the length of text is "+ x);
    }
    const handleOnChange = (event)=>{
        console.log("change text");
        setText(event.target.value)
    }

    // text = "ram"  wrong waynto chnage state
    // setText("shyam") correct way to change 
    return(
        <div>
            <div className="container">
            <h1>{props.heading}</h1>
 <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange}></textarea>
 <button type="button" className="btn btn-secondary btnStyle" onClick={handleUpClick}>Change in UpperCase</button>
 <button type="button" className="btn btn-secondary btnStyle" onClick={handlelowClick}>Change in LowerCase</button>
 <button type="button" className="btn btn-secondary btnStyle" onClick={handleCountLetter}>Count the length</button>
            </div>
            
 
        </div>
    )
}
import React,{useState} from "react";
import './TextBar.css'



export default function TextBar(props){
    const [text,setText] = useState("")

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
    const handleOnCopy = (event)=>{;
        let copyText = document.getElementById('exampleFormControlTextarea1')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
    }
    // const handleOnPaste = (event)=>{;
    //     let pasteText = navigator.clipboard.readText();
    //     // copyText.select()
    //     setText(pasteText)
    // }
    const handleOnClear = (event)=>{;
        setText("")
    }
    

    // text = "ram"  wrong waynto chnage state
    // setText("shyam") correct way to change 
    return(
        <div>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
 <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange}
 style={{backgroundColor:props.mode==='light'?'white':'grey'}}></textarea>
 <button type="button" className="btn btn-secondary btnStyle mt-2" onClick={handleUpClick}>Change in UpperCase</button>
 <button type="button" className="btn btn-secondary btnStyle mt-2" onClick={handlelowClick}>Change in LowerCase</button>
 <button type="button" className="btn btn-secondary btnStyle mt-2" onClick={handleCountLetter}>Count the length</button>
 <button type="button" className="btn btn-secondary btnStyle mt-2" onClick={handleOnCopy}>Copy Text</button>
 <button type="button" className="btn btn-secondary btnStyle mt-2" onClick={handleOnClear}>Clear Text</button>
            </div>
        
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Text Summary</h1>
        <div className="card">
                <div className="card-body" style={{backgroundColor:props.mode==='light'?'white':'grey'}}>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes take to read this text</p>
                </div>
        </div>
            
        </div>
           
            
 
        </div>
    )
}
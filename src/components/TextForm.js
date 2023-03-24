import React,  { useState } from "react"

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert ('Converted to upperCase!', 'success');
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert ('Converted to lowerCase!', 'success');
        
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ''
        setText(newText);
        props.showAlert ('Text cleared!', 'success');
    }
   
    
   
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');  
  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>     
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#13466e': 'white', color: props.mode=== 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>

    <buttton className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Upper Case</buttton>
    <buttton className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lower Case</buttton>
    <buttton className="btn btn-primary mx-1" onClick = {handleClearClick}> Clear Text</buttton>
    {/* <buttton className="btn btn-primary mx-1" onClick = {handleCopy}> Copy Text</buttton> */}
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

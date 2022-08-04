import React, {useState} from "react";

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleDownClick=()=>{
        console.log("LowerCase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick=()=>{
      let newText = ''
      setText(newText)
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    const handleOnChange=(event)=>{
        console.log("Changed")
        setText(event.target.value)
    }
    const [text,setText] = useState('')
  return (
      <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="9" placeholder="Enter text here"></textarea>
    </div>
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
      <button type="button" className="btn btn-danger mx-5" onClick={handleDownClick}>LowerCase</button>
      <button type="button" className="btn btn-danger mx-5" onClick={handleClearClick}>ClearText</button>
      <button type="button" className="btn btn-danger mx-5" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-5" >
        <h1>Your text summary</h1>
        <p>Words = {text.split(" ").length -1} Characters={text.length}</p>
        <p>Words = {0.08 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container"> 
            <h1 className='mb-4' style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3" style={{display: 'flex'}}>
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white', width: '100%', padding: '10px', }} id="myBox" rows="10" value={text}></textarea>
            <i className="fa-regular fa-copy" onClick={handleCopy} style={{cursor: 'pointer', position: 'absolute', padding: '10px', marginLeft: '81%'}}></i>
            </div>
            <button type='button' className="btn.btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type='button' className="btn.btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type='button' className="btn.btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button type='button' className="btn.btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}

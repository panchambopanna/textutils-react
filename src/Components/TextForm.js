import React, { useState } from 'react'

export default function TextForm(props) {
    const valueUpdate = (e) => {
        setText(e.target.value);
    }

    const changeToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to Upper Case', 'success');
    }

    const changeToLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to Lower Case', 'success');
    }

    const handleReplace = () => {
        let find = document.getElementById('findText').value;
        let replc = document.getElementById('replaceText').value;
        if (text.indexOf(find) === 0){
            find = find + " ";
            replc = replc + " ";
            console.log(text.indexOf(find))
            console.log(find);
        }
        else if (text.indexOf(find) === text.length-find.length) {
            find = " "+ find;
            replc = " "+ replc;
            console.log(text.indexOf(find))
            console.log(find);
        }
        else {
            find = " " + find + " ";
            replc = " " + replc + " ";
            console.log(text.indexOf(find))
            console.log(find);
        }

        if (text.indexOf(find) === -1){
            console.log(text.indexOf(find));
            alert("Word not found");
        }

        let newText = text.replace(find,replc);
        console.log(newText);
        setText(newText);
    }
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text has been copied', 'success');
    }
    
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed', 'success');
    }
    
    const handleClear = () => {
        setText("");
    }

    const [text, setText] = useState("");

    return (
        <div className = 'container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="5" placeholder="Enter you text here" onChange={valueUpdate} style={{backgroundColor: props.mode==='light'?'white':'lightgray'}}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.color}`} onClick={changeToUpper}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className={`mx-1 my-1 btn btn-${props.color}`} onClick={changeToLower}>Convert to lowercase</button>
            {/* find and place */}
            <label htmlFor="findText">Find: </label>
            <input className="mx-1 my-1" type="text" id="findText" />
            <label htmlFor="replaceText">Replace By: </label>
            <input className="mx-1 my-1" type="text" id="replaceText" />
            <button disabled={text.length===0} className={`mx-1 my-1 btn btn-${props.color}`} onClick={handleReplace}>Replace</button>
            {/*end of find and replace*/}
            <button disabled={text.length===0} className={`mx-1 my-1 btn btn-${props.color}`} onClick={handleRemoveSpace}>Remove Extra Space</button><br/><br/>
            <button disabled={text.length===0} className={`mx-1 my-1 btn btn-${props.color}`} onClick={handleCopyText}>Copy Text</button>
            <button disabled={text.length===0} className={`mx-1 my-1 btn btn-${props.color}`} onClick={handleClear}>Clear</button>

            <div className="container">
                <h2>Summary</h2>
                <p>There are {text.split(/\s+/).filter((a)=>{return a.length!==0}).length} words and {text.length} characters</p>
                <p>This can be read in {(text.split(/\s+/).filter((a)=>{return a.length!==0}).length)*0.008} minutes </p>
                <div style={text.length>0?{display:'block'}:{display:'none'}}>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

TextForm.defaultProps = {
    color: 'primary'
}

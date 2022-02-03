import React, { useEffect, useState } from 'react';
import Chrome from 'react-color/lib/components/chrome/Chrome';
import Alert from '../Alert/Alert';
import Colorbody from '../ColorBody/Colorbody';
var randomColor = require("randomcolor")
var randomcolor1 = randomColor();
var randomcolor2 = randomColor();
function Source() {
    const [color1, setcolor1] = useState(randomcolor1);
    const [color2, setcolor2] = useState(randomcolor2);
    const [angle, setangle] = useState("90deg")
    const [left, setleft] = useState("50%")
    const [right, setright] = useState("100%")
    const [value1, setvalue1] = useState("")
    const [value2, setvalue2] = useState("")
    const [value3, setvalue3] = useState("")
    const [success, setsuccess] = useState("primary")
    const [random, setrandom] = useState("primary")
    const [message, setmessage] = useState("");
    const [alert, setalert] = useState(false);
    const handleChange1 = (color) => {
        setcolor1(color.hex);
    }
    const handleChange2 = (color) => {
        setcolor2(color.hex)
    }
    const handlechange3 = (e) => {
        setvalue1(e.target.name = e.target.value);
        setangle(e.target.value + 'deg')
    }

    const handlechange4 = (e) => {
        setvalue2(e.target.name = e.target.value);
    }
    const handlechange5 = (e) => {
        setvalue3(e.target.name = e.target.value);
    }
    const onclick = () => {
        setrandom('success');
        setcolor1(randomColor());
        setcolor2(randomColor());
        setTimeout(() => {
            setrandom('primary')
        }, 2000);
    }
    useEffect(() => {
        if (value2.length != 0) {
            setleft(value2 + "%");
        }
        if (value3.length != 0) {
            setright(value3 + "%");
        }

    })
    const CopyToClipboard = () => {
        let copyText = document.getElementById("background")
        console.log(copyText.innerText);
        navigator.clipboard.writeText(copyText.innerText);
        setsuccess('success')
        setalert(true);
        setmessage("CSS property has been copied successfully")
        setTimeout(() => {
            setsuccess('primary')
            setalert(false)
        }, 3000);
    }
    return <>
        <Colorbody left={left} right={right} angle={angle} color1={color1} color2={color2} />
        <div className="my-4 container border " style={{ height: 'auto' }}>
            <div className=" my-2 row d-flex justify-content-around " style={{ height: "auto" }}>
                <div className="col-md-2 my-2 d-flex justify-content-center align-items-center  ">
                    <Chrome disableAlpha={false} color={color1} onChange={handleChange1} />
                </div>
                <div className="container col-md-6 px-2 my-4 px-0 d-flex justify-content-center flex-column align-items-center h-100">
                    <div className="rounded w-100 bg-dark h-50 d-flex flex-column justify-content-center align-items-center">
                        <h4 className='my-2' style={{ color: "whitesmoke" }}>CSS Property</h4>
                        <h6 id="background" style={{ color: "white", letterSpacing: "1px" }}><strong style={{ color: "blue" }}>background</strong> : linear-gradient({angle}, {color1} {left}, {color2} {right})</h6>
                    </div>
                    <div className="container my-2">
                        <input value={value1} placeholder='Enter angle between colors' required type="text" className="my-1 form-control" id="tag" name='input' onChange={handlechange3} />
                        <input value={value2} placeholder='Percentage for left color (<=50)' id="left" required type="text" className="my-1  form-control" id="tag" name='input' onChange={handlechange4} />
                        <input value={value3} placeholder='Percentage for right color (>=100)' if="right" required type="text" className="my-1 form-control" id="tag" name='input' onChange={handlechange5} />
                    </div>
                    <div className="container">
                        <button onClick={onclick} style={{ boxShadow: "none" }} className={`rounded btn mb-4 mx-1 btn-${random}`}>Random</button>
                        <button onClick={CopyToClipboard} style={{ boxShadow: "none" }} className={`rounded btn mb-4 mx-1 btn-${success}`}>Copy to clipboard</button>
                        {alert && <Alert message={message} />}
                    </div>
                </div>
                <div className="col-md-2 my-2 d-flex justify-content-center align-items-center ">
                    <Chrome color={color2} onChange={handleChange2} />
                </div>
            </div>
        </div>
    </>
}

export default Source;

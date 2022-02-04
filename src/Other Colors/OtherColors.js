import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import OtherColorComponent from './OtherColorComponent';
var random = require("randomcolor")
function OtherColors() {
    const [color, setcolor] = useState("");
    const traversal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return <>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row w-100  d-flex justify-content-center align-items-center">
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
                <OtherColorComponent color={random()}/>
            </div>
        </div>
    </>
}

export default OtherColors;

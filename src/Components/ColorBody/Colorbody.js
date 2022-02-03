import React from 'react';

function Colorbody(props) {
    return <>
        <div style={{ height: "300px", background: `linear-gradient(${props.angle}, ${props.color1} ${props.left}, ${props.color2} ${props.right})` }} className="container-fluid border">
        </div>
    </>
}

export default Colorbody;

import randomColor from 'randomcolor';
import React from 'react';
function OtherColorComponent(props) {
    return <>
        <div style={{ height: "300px", borderRadius: '10px', background: props.color }} className="col-md-3 mx-2 my-2 border ">
            <div style={{ borderRadius: '5px' }} className="container-fluid text-light py-2  text-muted bg-light my-3">
                <strong className='text-muted'> background </strong> : '{props.color}'
            </div>
        </div>
    </>
}

export default OtherColorComponent;

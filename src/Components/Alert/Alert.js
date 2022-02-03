import React from 'react';

function Alert( props) {
    return <>
        <div class="alert alert-success" role="alert">
           <strong>Success</strong> : {props.message}
        </div>
    </>
}

export default Alert;

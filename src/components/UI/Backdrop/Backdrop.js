import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    return (props.change ? <div className="backdrop" onClick={props.clicked}> </div> : null)
}

export default backdrop;
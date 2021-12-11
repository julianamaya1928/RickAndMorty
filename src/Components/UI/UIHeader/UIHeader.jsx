import React from "react";
import './UIHeader.css'

export const UIHeader = ({greatting})=>{
    return(
        <div className="div-header">
            <h1>{greatting}</h1>
            <hr />
        </div>
    );
}
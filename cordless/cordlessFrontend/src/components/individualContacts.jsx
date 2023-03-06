import React from 'react';
import '../mainStyle.css'

export default function IndividualContact({nameOfContact, onClickFunction}) {
    return(
        <div>
            <button key={nameOfContact} className="contactName" type = 'button' onClick={onClickFunction} >{nameOfContact}</button>
        </div>
    )
        
}  



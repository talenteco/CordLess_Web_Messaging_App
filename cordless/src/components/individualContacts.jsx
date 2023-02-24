import React from 'react';
import '../mainStyle.css'

//to do: bind function eventOnClick to object

export default function IndividualContact({nameOfContact, onClickFunction}) {

    console.log("Function Called")
    return(
        <div>
            <button key={nameOfContact} className="contactName" type = 'button' onClick={onClickFunction} >{nameOfContact}</button>
        </div>
    )
        
}  



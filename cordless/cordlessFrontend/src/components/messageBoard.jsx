import React, { useState } from 'react';
import '../mainStyle.css'
import SendTextField from './sendTextField';


export default function MessageBoard({displayOfMessageBoard, currentContactFromMain, portForMessageBoard, sendTextFieldForSend, sendTextFieldMessage, sendTextFieldForChange}){

    portForMessageBoard = 4000
    const [value, setValue]  = useState("Enter Text Here");
    
    function handleOnClickInMessageBoard(){
        console.log("message sent!")
    }

    const handleOnChangeInMessageBoard = event =>{
        setValue(event.target.value);
    }

    return(
        <div>
            <div>
                {currentContactFromMain}
            </div>
            <div className='messageBoard'>
                <h3>{displayOfMessageBoard}</h3>
            </div>
            <div className='messageSendField'>
                <SendTextField currentContactForTextField={currentContactFromMain} port={portForMessageBoard} message={sendTextFieldMessage} handleOnClick={sendTextFieldForSend} handleOnChange={sendTextFieldForChange}/>
            </div>
        </div>
    )
}
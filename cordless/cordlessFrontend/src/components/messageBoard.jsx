import React, { useState } from 'react';
import '../mainStyle.css'
import SendTextField from './sendTextField';

export default function MessageBoard({displayOfMessageBoard}){

    const [value, setValue]  = useState("Enter Text Here");

    function handleOnClickInMessageBoard(){
        console.log("message sent!")
    }

    const handleOnChangeInMessageBoard = event =>{
        setValue(event.target.value);
    }

    return(
        <div>
            <div className='messageBoard'>
                <h3>{displayOfMessageBoard}</h3>
            </div>
            <div className='messageSendField'>
                <SendTextField />
            </div>
        </div>
    )
}
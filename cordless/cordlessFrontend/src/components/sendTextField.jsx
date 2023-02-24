import React, { useState } from 'react';
import '../mainStyle.css'

export default function SendTextField(){

    const [message, setMessage] = useState("Enter your message here")

    function handleOnKeyDown(event){
        
        if(event.key==='Enter'){
        console.log("Got the value!!")
        console.log(event.target.value)
        }
    }

    function sendMessage(message){
        console.log(message)
    }

    return(
        <form>
                <input type='text' value = {message} onChange={(event)=>{setMessage(event.target.value)}} onKeyDown={(event)=>{handleOnKeyDown(event)}}/>
        </form>
    );
}
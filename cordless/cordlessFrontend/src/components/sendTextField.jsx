import React, { useState } from 'react';
import '../mainStyle.css'
import findCurrentUser from '../middlewareAndBusinessLogic/updateCurrentUser';
import insertMessagesIntoDB from '../middlewareAndBusinessLogic/insertMessageThroughTextField';


export default function SendTextField({currentContactForTextField, port, message, handleOnClick, handleOnChange}){


    

    return(
        <div>
        <input className='textArea' value={message} onChange={handleOnChange}/ >
        <button className='textAreaSubmitButton' onClick={()=>{handleOnClick(currentContactForTextField)}}>Send</button>
        </div>
    );
}
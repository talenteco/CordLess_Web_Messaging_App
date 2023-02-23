import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import IndividualContact from './components/individualContacts';
import MessageBoard from './components/messageBoard';

const domNode = document.getElementById('root');
const root = createRoot(domNode);


export default function MainPage(){
    
    const contactName = ["Utkarsh", "Daniel"];
    const [messageBoardDisplay, setMessageBoardDisplay] = useState("This is the Message Board");

    function handleOnClick(){
        setMessageBoardDisplay("Hello, this is where your messages with "+ contactName[0]+ "'s will display!");
        console.log("I am being clicked");
    }

//add function to map multple contact names to buttons
return(
    <div className='parent'>
        <div className = "child">
            
            <IndividualContact  nameOfContact = {contactName[0]} onClickFunction={handleOnClick} />
        </div>
        <div className = "child">
            <MessageBoard  displayOfMessageBoard={messageBoardDisplay} />
        </div>
    </div>
    );;

}

root.render(
    <MainPage />
);


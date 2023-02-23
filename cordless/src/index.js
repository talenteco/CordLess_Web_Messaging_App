import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import IndividualContact from './components/individualContacts';
import MessageBoard from './components/messageBoard';

const domNode = document.getElementById('root');
const root = createRoot(domNode);


export default function MainPage(){
    
    const contactNames = ["Utkarsh", "Daniel", "Amol", "Ashish"];
    const [messageBoardDisplay, setMessageBoardDisplay] = useState("This is the Message Board");

    function handleOnClick(nameOfContactForFunction){
        setMessageBoardDisplay("Hello, this is where your messages with "+ nameOfContactForFunction + "'s will display!");
        console.log("I am being clicked");
    }

//add function to map multple contact names to buttons
return(
    <div>
        <h1>CordLess</h1>
        <div className='parent'>
            <div className = "child"> 
                {contactNames.map( function(contactName){return <IndividualContact  nameOfContact = {contactName} onClickFunction={()=>{handleOnClick(contactName)}} />})}
            </div>
            <div className = "child">
                <MessageBoard  displayOfMessageBoard={messageBoardDisplay} />
            </div>
        </div>
    </div>   
        
    );;

}

root.render(
    <MainPage />
);


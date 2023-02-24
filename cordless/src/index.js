import React, { useState } from 'react';
import {createRoot} from 'react-dom/client';
import IndividualContact from './components/individualContacts';
import MessageBoard from './components/messageBoard';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// add functionality to left aligh and right align contacts and the users messages respectively
export default function MainPage(){
    
    const contactNames = ["Utkarsh", "Daniel", "Amol", "Ashish"];
    const [messageBoardDisplay, setMessageBoardDisplay] = useState("This is the Message Board");
    const messageBoardMessages = {"Daniel":[{"message":"Hi!", "identifier":"user"},{"message":"Hello!", "identifier":null},{"message":"How are you?", "identifier":"user"}],
         "Utkarsh":[{"message":"Sup?", "identifier":"user"},{"message":"Nm wbu?", "identifier":null},{"message":"same nm", "identifier":"user"},{"message":"Sup?", "identifier":"user"},{"message":"Nm wbu?", "identifier":null},{"message":"same nm", "identifier":"user"},{"message":"Sup?", "identifier":"user"},{"message":"Nm wbu?", "identifier":null},{"message":"same nm", "identifier":"user"},{"message":"Sup?", "identifier":"user"},{"message":"Nm wbu?", "identifier":null},{"message":"same nm", "identifier":"user"}]};

    function handleMessageBoardMessages(messagesForFunction){

        return(
        <div>
            {
            messagesForFunction.map((message)=>{
                const alignment = message["identifier"]? "Right" : "Left";
                const textAlignment = "messages"+alignment;
                return(
                <div className={textAlignment}>
                    <button className='messages'>{message["message"]}</button>
                </div>
                
                )}
                )
                }
        </div>
        );

    }

    function handleOnClick(nameOfContactForFunction){
        console.log("nameofcontactforfucntion "+messageBoardMessages)
        if(messageBoardMessages[nameOfContactForFunction]){
            setMessageBoardDisplay(handleMessageBoardMessages(messageBoardMessages[nameOfContactForFunction]));
        } else {
            setMessageBoardDisplay("Hello, this is where your messages with "+ nameOfContactForFunction + "'s will display! Go ahead and send them a message!");
        }
        
        console.log("I am being clicked");
    }

//add function to map multple contact names to buttons
return(
    <div>
        <div className='header'>CordLess</div>
        <div className='parent'>

            <div className = "childContact"> 
                <div>Contacts</div>
                {contactNames.map( function(contactName){return <IndividualContact  nameOfContact = {contactName} onClickFunction={()=>{handleOnClick(contactName)}} />})}
            </div>

            <div className = "childMessageBoard">
                <MessageBoard  displayOfMessageBoard={messageBoardDisplay} />
            </div>

        </div>
    </div>   
        
    );;

}

root.render(
    <MainPage className = "entirePage" />
);


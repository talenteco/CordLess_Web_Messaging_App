import React, { useState, useEffect } from 'react';
import IndividualContact from './individualContacts';
import MessageBoard from './messageBoard';
import updateMessageBoard from '../middlewareAndBusinessLogic/updateMessageBoard';
import insertMessagesIntoDB from '../middlewareAndBusinessLogic/insertMessageThroughTextField';

const port=4000

export default function MainPage({portForMain, currentUserActive, currentContactsActive}){
    const contactNames = currentContactsActive
    
    const [messageBoardDisplay, setMessageBoardDisplay] = useState("This is the Message Board, Go ahead and message someone !");
    const [messageBoardMessages, setMessageBoardMessages] = useState({})
    const [currentContact, setCurrentContact] = useState('')
    var [message, setMessage] = useState("Enter")
    const [useEffectVar, setUseEffectVar] = useState(Math.random())

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
        if(messageBoardMessages[nameOfContactForFunction]){
            setMessageBoardDisplay(handleMessageBoardMessages(messageBoardMessages[nameOfContactForFunction]));
            setCurrentContact(nameOfContactForFunction)
        } else {
            setMessageBoardDisplay("Hello, this is where your messages with "+ nameOfContactForFunction + "'s will display! Go ahead and send them a message!");
            setCurrentContact(nameOfContactForFunction)
        }
        
    }

    useEffect(()=>{
        const updateMainPageVariable = async()=>{
            let variable = await updateMessageBoard(port, currentUserActive)
            setMessageBoardMessages(variable)
        };
        updateMainPageVariable();
        },[currentUserActive]);

     
    function handleOnClickForSend(currentContactForTextField){


        setMessage('')
        setMessageBoardDisplay('Your message has been sent !')
        const response = insertMessagesIntoDB(currentUserActive, message, currentContactForTextField, port)
        setTimeout(()=>{window.location.reload()},2000)
        
        
    }

    function handleOnChangeForSend(event){
        setMessage(event.target.value)
    }

    //add function to map multple contact names to buttons
    return(
    <div>
        
        <div className='parent'>

            <div className = "childContact"> 
                <div>Contacts</div>                                                
                {currentContactsActive.map( function(contactName){return <IndividualContact key={contactName}  nameOfContact = {contactName} onClickFunction={()=>{handleOnClick(contactName)}} />})}
            </div>

            <div className = "childMessageBoard">
                <MessageBoard  displayOfMessageBoard={messageBoardDisplay} currentContactFromMain={currentContact} portForMessageBoard={portForMain} sendTextFieldForSend={handleOnClickForSend} sendTextFieldMessage={message} sendTextFieldForChange = {handleOnChangeForSend}/>
            </div>

        </div>
    </div>   
        
    );;

}
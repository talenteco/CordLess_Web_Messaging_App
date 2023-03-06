import React, { useState, useEffect } from 'react';
import IndividualContact from './individualContacts';
import MessageBoard from './messageBoard';
import findCurrentUser from '../middlewareAndBusinessLogic/updateCurrentUser';
import updateMessageBoard from '../middlewareAndBusinessLogic/updateMessageBoard';
import insertMessagesIntoDB from '../middlewareAndBusinessLogic/insertMessageThroughTextField';

const port=4000

export default function MainPage({portForMain}){
    const contactNames = ["Daniel", "Amol", "Ashish"];
    const [messageBoardDisplay, setMessageBoardDisplay] = useState("This is the Message Board");
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
        console.log("in use effect")
        const updateMainPageVariable = async()=>{
            let variable = await updateMessageBoard(port)
            console.log("Here are the values: "+JSON.stringify(variable))
            setMessageBoardMessages(variable)
        };
        updateMainPageVariable();
        },[]);

     
    function handleOnClickForSend(currentContactForTextField){

        
        const sender =findCurrentUser()
        setMessage('')
        setMessageBoardDisplay('Your message has been sent !')
        const response = insertMessagesIntoDB(sender, message, currentContactForTextField, port)
        setTimeout(()=>{window.location.reload()},2000)
        
        
    }

    function handleOnChangeForSend(event){
        setMessage(event.target.value)
    }

    
    //add function to map multple contact names to buttons
    return(
    <div>
        <div className='header'>CordLess</div>
        <div className='parent'>

            <div className = "childContact"> 
                <div>Contacts</div>                                                //ADD A BETTER KEY BELOW
                {contactNames.map( function(contactName){return <IndividualContact key={contactName}  nameOfContact = {contactName} onClickFunction={()=>{handleOnClick(contactName)}} />})}
            </div>

            <div className = "childMessageBoard">
                <MessageBoard  displayOfMessageBoard={messageBoardDisplay} currentContactFromMain={currentContact} portForMessageBoard={portForMain} sendTextFieldForSend={handleOnClickForSend} sendTextFieldMessage={message} sendTextFieldForChange = {handleOnChangeForSend}/>
            </div>

        </div>
    </div>   
        
    );;

}
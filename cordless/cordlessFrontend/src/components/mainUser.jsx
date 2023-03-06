import { all } from 'axios';
import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';

const port=4000
const allUsers = ['Utkarsh','Amol', 'Ashish', 'Daniel']

function calculateContacts(currentUserFromMain){

    let calcFinalContacts = [...allUsers]
    let index = calcFinalContacts.indexOf(currentUserFromMain)
    let removed = calcFinalContacts.splice(index, 1)
    return calcFinalContacts

}



export default function MainUser(){

    const[currentUser, setCurrentUser] = useState('Utkarsh')
    const[clicked, setClicked] = useState(false)
    const[contacts, setContacts] = useState(calculateContacts(currentUser))

    function handleOnClickDropDown(){
        setClicked(!clicked)

    }

    function handleOnClickOptions(value){
        setCurrentUser(value)
        setContacts(calculateContacts(value))
        setClicked(!clicked)
    }

    return(

        <div>
        <div className='header'>CordLess</div>
        <div className='dropDown'>
            Current User's Name:
        </div> 
        <button className='currentUser' onClick={()=>handleOnClickDropDown()}>{currentUser} </button>
        <div className='instructions'> Click this button To Change Current User</div>
        {
        clicked &&
        <div>
        {contacts.map((contact)=>{
            return(
                <div key={contact}>
                <button key={contact} onClick={()=>handleOnClickOptions(contact)}>{contact}</button><br></br>
                </div>

            )})}

        </div>
        }
        <MainPage className= "entirePage" portForMain={port} currentUserActive={currentUser} currentContactsActive={contacts}/>
        </div>
    )



}
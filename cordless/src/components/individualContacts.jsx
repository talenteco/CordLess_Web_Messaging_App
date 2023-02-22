import React, { Component } from "react";

//to do: bind function eventOnClick to object

class individualContacts extends Component{

    constructor(contactName, valueName){
        super(contactName, valueName)
        this.state = 
        {contactName : contactName,
        valueName : valueName}
    }

    eventOnClick(){
        console.log("I have been clicked");
    }

    individualContact() {
    console.log("Function Called")
        return(
            <div className="w3-container w3-red">
            <button key={this.state.valueName} className="w3-ripple" type = 'button' onClick={this.eventOnClick} >Hello World from {this.state.contactName}</button>
            </div>
        )
           
    }

  
};

export default individualContacts;
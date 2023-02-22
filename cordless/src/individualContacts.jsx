import React, { Component } from "react";

class individualContacts extends Component{
    

    constructor(contactName){
        console.log(contactName)
        console.log("In contructor")
        super(contactName)
        this.state= {contactName : contactName}
    }

    individualContact() {
    console.log("Function Called")
        return(

            <h1>Hello World from individual Contacts</h1>
        )
           
    }

  
};

export default individualContacts;
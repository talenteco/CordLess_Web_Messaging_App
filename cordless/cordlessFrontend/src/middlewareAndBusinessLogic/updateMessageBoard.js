import UpdateMessages from './updateMessages';


export default async function updateMessageBoard(port, curentUserFromMain){
    const values= await UpdateMessages(port);
    const messages = values
    const messagesLength = values.length

    let final_messageBoardMessages={}
    let contacts=[]

    for(let j =0; j<messagesLength;j++){
        let identifier
        var lenghtContacts = contacts.length;
        let unkownContact
        let counter = 0;
        let prevContact;

        if((curentUserFromMain===messages[j].sender)){
            unkownContact= messages[j].receiver
        } else if((curentUserFromMain===messages[j].receiver)){
            unkownContact= messages[j].sender
        }

        for(let z = 0;z<lenghtContacts;z++)
        {
            if((contacts[z]===unkownContact))
            {   prevContact=unkownContact
                counter=1
                break;}
        }

        if(counter===0){
            prevContact=unkownContact
            contacts.push(prevContact)
            final_messageBoardMessages[prevContact]=[]

        }

        if(curentUserFromMain===messages[j].sender){
            identifier = "user"
        }
        else{
            identifier = null
        }
        const temp={"message":messages[j].messages, "identifier":identifier}
        
        final_messageBoardMessages[prevContact].push(temp)

    }
    return(final_messageBoardMessages)


}

import UpdateMessages from './updateMessages';
import findCurrentUser from './updateCurrentUser';


export default async function updateMessageBoard(port){
    
    console.log("In message board update")
    const values= await UpdateMessages(port);
    const curentUser = findCurrentUser();

    //console.log("In message board update 2222")
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

        if((curentUser===messages[j].sender)){
            unkownContact= messages[j].receiver
        } else if((curentUser===messages[j].receiver)){
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

        if(curentUser===messages[j].sender){
            identifier = "user"
        }
        else{
            identifier = null
        }
        const temp={"message":messages[j].messages, "identifier":identifier}
        
        final_messageBoardMessages[prevContact].push(temp)
        // console.log("ypopp "+JSON.stringify(final_messageBoardMessages))

    }

    //console.log("hiiiiyaa "+JSON.stringify(final_messageBoardMessages))
    return(final_messageBoardMessages)


}

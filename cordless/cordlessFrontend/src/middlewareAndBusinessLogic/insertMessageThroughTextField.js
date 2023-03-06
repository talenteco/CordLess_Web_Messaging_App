import axios, * as others from 'axios';

export default async function insertMessagesIntoDB(senderFinal, messageFinal, receiver, port){

    
    const inserting = async()=>{
        try{
        
        const messageBody = {
            'sender' : senderFinal,
            'receiver' : receiver,
            'date' :  new Date().toLocaleString(),
            'messages' : messageFinal}

        const headers = {'Content-Type' : 'application/json'}
        const response = await axios.post(`http://127.0.0.1:4000/messages/post`, messageBody, { headers })
        
        return(response.data)
    }
    catch(error){
        console.log(error.message)
    }}

    await inserting()

}

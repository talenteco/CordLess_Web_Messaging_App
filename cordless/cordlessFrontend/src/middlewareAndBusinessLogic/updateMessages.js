import axios, * as others from 'axios';

export default async function UpdateMessages(port){
    try{
        const response = await axios.get(`http://localhost:4000/messages/`)
        return(response.data)
    }
    catch(error){
        console.log(error.message)
    }
}

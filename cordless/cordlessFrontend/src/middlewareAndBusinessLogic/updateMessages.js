import axios, * as others from 'axios';

export default async function UpdateMessages(port){
    try{
        const response = await axios.get(`http://localhost:${port}/messages/`)
        return(response.data)
    }
    catch(error){
        console.log(error.response.data)
    }
}

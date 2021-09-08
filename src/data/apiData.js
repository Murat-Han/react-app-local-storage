import axios from 'axios';

export async function addDataToLocalStorage(){
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
       return data;
    } catch (error) {
        throw error;
    }
}
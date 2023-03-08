import axios from "axios"


export const videoApi = async() => {
    const response = await axios.get('/videos');

    return response.data;
}
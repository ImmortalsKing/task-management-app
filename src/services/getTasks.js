import axios from "axios";

export const getTasks = async () => {
    const response = await axios.get('http://127.0.0.1:8000/tasks/');
    return response.data.results;
};
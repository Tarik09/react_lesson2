import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
};

let axiosInstance = axios.create(config);
const getComments = (id) => {
    return axiosInstance('/' + id + '/comments');
};

export {getComments};
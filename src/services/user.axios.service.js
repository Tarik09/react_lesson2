import axios from 'axios';

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
    };
let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get('');
};
const getAxiosUser = (id) => {
    return axiosInstance.get('/' + id);
};

export {getAxiosUsers, getAxiosUser};
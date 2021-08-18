import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
};

let axiosInstance = axios.create(config);
const getPosts = (id) => {
    return axiosInstance('/' + id + '/posts');
};
export {getPosts};
import axios from 'axios';
const instance = axios.create({
    baseURL:'https://prodata-31316.firebaseio.com/'
});
export default instance;
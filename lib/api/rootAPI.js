import axios from 'axios';
const rootapi = axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5',
    timeout:36000,
})

export default rootapi;
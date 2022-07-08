import axios from "axios";

console.log(process.env.VUE_APP_LOCAL_SERVER_URL);


const instance = axios.create({
   baseURL: 'http://127.0.0.1:8000/mails',
})
export default instance;
import axios from "axios";

const instance =axios.create({
   //baseURL
   // Header
   // timeout

   baseURL:"https://jsonplaceholder.typicode.com/"
});
export default instance;
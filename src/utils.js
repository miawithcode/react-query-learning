import axios from "axios";

const authFetch = axios.create({
  baseURL: 'http://localhost:5001/api/tasks'
})

export default authFetch;
import axios from "axios";

const axiosInfo = axios.create({
  baseURL:
    "https://ajs-13-batalov-lesson63-default-rtdb.europe-west1.firebasedatabase.app/",
});
export default axiosInfo;

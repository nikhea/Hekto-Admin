import axios from "axios";
import { storage } from "../auth/utils";

let main = import.meta.env.VITE_HEKTO_PRODUCT;
let app = " https://hekto-v4oa.onrender.com/api/";
let test = import.meta.env.VITE_HEKTO_DEVELOPMENT;
const instance = axios.create({
  baseURL: app,
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});

export default instance;

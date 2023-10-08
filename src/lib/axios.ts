import axios from "axios";
import { storage } from "../auth/utils";

let main = import.meta.env.VITE_HEKTO_PRODUCT;
let test = import.meta.env.VITE_HEKTO_DEVELOPMENT;
const instance = axios.create({
  baseURL: main,
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});

export default instance;

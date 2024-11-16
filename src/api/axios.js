import axios from "axios";
import { getCookie, setCookie } from "../auth/cookie";

const instance = axios.create({
  baseURL: `https://`,
});

export default instance;

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/user" });

export const registerUser = (email) => API.post("/register", { email });
export const clickButton = (email) => API.post(`/${email}/click`);
export const fetchUserDetails = (email) => API.get(`/${email}`);

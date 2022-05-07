import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export const userAuthenticate = async (data) =>
  api.post("/api/authenticate", data);

export const storeEmployeeForm = async (data) =>
  api.post("/api/store-employee-form", data);

export default api;

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    "X-Correlation-Id": "linux-mint-123456789",
    //"Access-Control-Allow-Origin": "http://127.0.0.1:8080",
    //"Access-Control-Allow-Methods": "POST",
    //"Access-Control-Allow-Headers": "Content-Type, Authorization"
  }
});
import axios from "axios";

const mainAxios = axios.create();

mainAxios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }
    return error;
});

export default mainAxios;

import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers:{
        "Content-Type":"aplication/json"
    }
})

export default api;

//Ya podemos usar todos los métodos de axios
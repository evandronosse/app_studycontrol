//aqui é onde definimos qual porta vamos usar para efetuar os métodos do front para o back, no caso, o back está na porta 3333
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333',
})

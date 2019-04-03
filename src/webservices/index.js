import axios from "axios"
import {BASE_URL} from '../config/api'
//import {TOKEN} from '../config/token'


export function configureAxios(){
    axios.defaults.baseURL = BASE_URL
//  axios.defaults.headers.common['Authorization'] = TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetchMovies(){
    const url = BASE_URL    /// Probar con la direccion completa del api
    return axios.get(url)
    
//    return new Promise((resolve, reject)=> {
//        const url = './peliculas'
//        axios.get(url)
//        .then(res => {
//            resolve(res)
//        })
//        .catch(err =>{
//            reject(err)
//        })
//    })
}

export function fetchDetailByMovie(){
    const url = `/movies?`
    return  axios.get(url)
}
import axios from "axios";

export class AuthService {
   constructor(){
     this.client = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
     })
    //  this.client.interceptors.request.use((request)=>{
    //     request.headers.set('Authorization', sessionStorage.getItem('jwt') )
    //  })
   }

   async login({identifier, password }){
    this.client.post('/auth/local', {identifier, password})
    sessionStorage.setItem('jwt', 'new value')
   }

   async logout(){
    sessionStorage.removeItem('jwt')
   }

   async register({ username, password }){

   }
   async forgetPassword(){

   }
}

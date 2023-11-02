import axios, { AxiosError } from "axios";
import { Result } from "../../utils/result";

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
      if ( identifier ===null || identifier === undefined ){
         return Result.error({
            error: {
              code: 422
            }
         }, 'Identifier is a required field')
      }
      if ( password ===null || password === undefined ){
         return Result.error({
            error: {
              code: 422
            }
         }, 'Password is a required field')
      }
      try {
         const response =  await this.client.post('/auth/local', {identifier, password})
         return Result.ok(response.data, 'Login successful')
      } catch (error) {
         if( error instanceof AxiosError){
            return Result.error(error.response.data, Result.getMessage(error.response.data, 'Unknown Error'))
         }
         console.error(error)
         return Result.error({}, 'Unknown Error')
      }
     
    // success result
    //  {
   //    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk4NTIzNjA0LCJleHAiOjE3MDExMTU2MDR9.88OQkWIOSFZ_HOoVLovz0l6zzIUtmUG8MZkxEpbcerU",
   //    "user": {
   //      "id": 2,
   //      "username": "foobar",
   //      "email": "foo.bar@strapi.io",
   //      "provider": "local",
   //      "confirmed": true,
   //      "blocked": false,
   //      "createdAt": "2023-09-23T19:34:26.917Z",
   //      "updatedAt": "2023-09-23T19:34:26.917Z",
   //      "allowNotification": null,
   //      "designation": null
   //    }
   //  }

   // error result 
   // {
   //    "data": null,
   //    "error": {
   //      "status": 400,
   //      "name": "ValidationError",
   //      "message": "Invalid identifier or password",
   //      "details": {}
   //    }
   //  }
   }

   async logout(jwt){
      return Result.ok({}, 'Logout successful')
   }

   async register({ username, password }){

   }
   async forgetPassword(){

   }
}

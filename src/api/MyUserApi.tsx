import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

type CreateUserRequest={
  auth0Id: String,
  email: String
}

export const useCreateMyUser = ()=>{
  const CreateMyUserRequest = async (user : CreateUserRequest)=>{
    try{
      const response = await axios.post(`${API_BASE_URL}/api/my/user`,{
        user
      })
      if(!response.status){
        throw new Error("failed to create user")
      }
    }catch(error){
      console.log("MyUserApi.tsx")
      throw error
    }
        
  }
} 
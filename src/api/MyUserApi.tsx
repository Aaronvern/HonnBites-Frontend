import axios from "axios";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

type CreateUserRequest={
  auth0Id: String,
  email: String
}

export const useCreateMyUser = ()=>{
  const CreateMyUserRequest = async (user : CreateUserRequest)=>{
    console.log("MyUserApi.tsx",user)
    try{
      const response = await axios.post(`${API_BASE_URL}/api/my/user`,JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if(response.status !== 200){
        throw new Error("failed to create user")
      }
    }catch(error){
      console.log("MyUserApi.tsx")
      throw error
    }
  }
  const { mutateAsync : createUser, isLoading , isError , isSuccess } = useMutation(CreateMyUserRequest)

  return {
    createUser, 
    isLoading , 
    isError , 
    isSuccess
  }
}

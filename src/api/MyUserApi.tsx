import { useAuth0 } from "@auth0/auth0-react";
//import axios from "axios";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

type CreateUserRequest={
  auth0Id: String,
  email: String
}

export const useCreateMyUser = ()=>{

  const { getAccessTokenSilently } = useAuth0()

  const CreateMyUserRequest = async (user : CreateUserRequest)=>{
    console.log("MyUserApi.tsx",user)
    try{
      const accessToken = await getAccessTokenSilently()
      console.log("accesstoken :: ", accessToken)
      const response = await fetch(`${API_BASE_URL}/api/my/user`,{
        method:"Post",
        headers: {
          Authorization:`Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
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

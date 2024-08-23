import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
//import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;


export const useGetMyUser = ()=>{
  const {getAccessTokenSilently} = useAuth0()
  const getMyUserRequest = async(): Promise<User> => {
    const accessToken =await getAccessTokenSilently()
    const response = await fetch(`${API_BASE_URL}/api/my/user`,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${accessToken}`,
        "Content-Type":"application/json"
      }
    })
    if(!response.ok){
      throw new Error("Failed to fetch user");
    }
    return response.json() 
  }
  const { data: currentUser , isLoading , error }= useQuery("fetchCurrentUser",getMyUserRequest);
  if(error){
    toast.error(error.toString())
  }
  return{ currentUser , isLoading }
}


type CreateUserRequest={
  auth0Id: String,
  email: String
}

export const useCreateMyUser = ()=>{

  const { getAccessTokenSilently } = useAuth0()

  const CreateMyUserRequest = async (user : CreateUserRequest)=>{
    try{
      const accessToken = await getAccessTokenSilently()
      const response = await fetch(`${API_BASE_URL}/api/my/user`,{
        method:"Post",
        headers: {
          Authorization:`Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
      if(!response.status){
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

type updateMyUserRequest ={
  name:string,
  addressLine1:string, 
  city:string, 
  country:string
}

export const useUpdateMyUser = ()=>{
  const { getAccessTokenSilently }= useAuth0()
  try{
    const updateMyUserRequest = async (formData : updateMyUserRequest)=>{
      const accessToken = await getAccessTokenSilently()
      const response = await fetch(`${API_BASE_URL}/api/my/user`,{
        method:"PUT",
        headers:{
          Authorization:`Bearer ${accessToken}`,
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
      })
      return response.json()
    }  
    const {mutateAsync : updateUser, isLoading , isSuccess , error, reset} = useMutation(updateMyUserRequest)


    if(isSuccess){
      toast.success("Profile Updated")
    }

    if(error){
      toast.error(error.toString())
      reset()
    }

    return {updateUser, isLoading}
  }catch(error){  
      console.log("MyUserApi.tsx:: unable to update user info")
      throw error
    }
   
}
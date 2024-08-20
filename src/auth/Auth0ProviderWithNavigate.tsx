import { useCreateMyUser } from '@/api/MyUserApi'
import { AppState, Auth0Provider, User } from '@auth0/auth0-react'
import React from 'react'
type Props = {
    children : React.ReactNode
}

function Auth0ProviderWithNavigate({children}: Props) {
    const { createUser } = useCreateMyUser(); 
    const domain = import.meta.env.VITE_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URL

    if(!domain || !clientId || !redirectUri){
        throw new Error('Missing Auth0 environment variables!! unable to connect to Auth0')
    }

    const onRedirectCallback = (appState ?: AppState ,user?: User)=>{
        console.log("user details from authO ", user)
        if(user?.sub && user?.email){
            createUser({
                auth0Id: user.sub, 
                email: user.email
            })
        }
    }

    return (
    <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{ redirect_uri: redirectUri }}
        onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}



export default Auth0ProviderWithNavigate

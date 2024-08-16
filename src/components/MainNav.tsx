import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"

function MainNav() {
  const {loginWithRedirect} = useAuth0()
  return (
    <Button 
      variant="ghost" 
      className=" hover:text-orange-800 text-orange-600 text-xl hover:bg-white font-bold"
      onClick={ async()=> await loginWithRedirect()}
    >
     Login
    </Button>
  )
}

export default MainNav
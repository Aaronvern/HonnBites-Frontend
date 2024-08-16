import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"

function MainNav() {
  const { loginWithRedirect , isAuthenticated} = useAuth0()
  return (
    <div>
      <span className="flex items-center space-x-2">
        {isAuthenticated ? (
          <UsernameMenu/> 
          ):(
          <Button 
            variant="ghost" 
            className=" hover:text-orange-800 text-orange-600 text-xl hover:bg-white font-bold"
            onClick={ async()=> await loginWithRedirect()}
            >
            Login
          </Button>
          )
        }
      </span>
      
    </div>
  )
}

export default MainNav
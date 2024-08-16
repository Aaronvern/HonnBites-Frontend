import { /*CircleUserRound,*/ Menu} from "lucide-react"
import { SheetContent, SheetDescription, SheetTitle, SheetTrigger, Sheet  } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"


function MobileNav() {
  const {isAuthenticated , loginWithRedirect , user }= useAuth0();
  //you can add circleuser profile if needed  
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className=" text-orange-400"></Menu>
        </SheetTrigger>
        <SheetContent className=" space-y-5">
        <SheetTitle className="flex justify-center font-bold text-2xl text-orange-400">
          {isAuthenticated ? (
            <>
              { user?.picture && <img src={user?.picture} className='rounded-full size-8' />}
              <span className="ml-2">{user?.name}</span>
            </>
          ) : (
            <span>HONNBITES</span>
          )}
        </SheetTitle>
        <Separator className="mx-10"/>
        <SheetDescription className="flex flex-col gap-3 px-3 ">
            {
              isAuthenticated ? (
                <MobileNavLinks/>
              ):(
                <Button 
                  variant="ghost" 
                  className=" hover:bg-orange-500 flex-1 font-bold text-orange-700 bg-orange-400 mx-10 "
                  onClick={()=>loginWithRedirect()}
                  >
                    LOG IN
                </Button>
              )
            }
        </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
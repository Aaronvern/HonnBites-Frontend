import { Menu} from "lucide-react"
import { SheetContent, SheetDescription, SheetTitle, SheetTrigger, Sheet  } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"


function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className=" text-orange-400"></Menu>
        </SheetTrigger>
        <SheetContent className=" space-y-5">
        <SheetTitle className="flex justify-center font-bold text-2xl text-orange-400">HONNBITES</SheetTitle>
        <Separator className=""/>
        <SheetDescription className="flex-1 flex justify-center">
            <Button variant="ghost" className=" hover:bg-orange-500 flex-1 font-bold text-orange-700 bg-orange-400 mx-10 ">LOG IN</Button>
        </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
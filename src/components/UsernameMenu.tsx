
import {  } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent , DropdownMenuItem, DropdownMenuTrigger} from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

export default function UsernameMenu(){
  const { user , logout } = useAuth0()
   return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center text-orange-500 gap-2 font-bold hover:text-orange-700'>
        
        {
          user && user.picture ? (
            <img src={user?.picture} className='rounded-full size-8'></img> 
          ):(
            <CircleUserRound className='text-orange-500' />
          )
        }
        { user?.name }
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to= "/user-profile" className='font-bold ml-2 p-1 text-orange-900 hover:text-orange-600'>
            User Profile
          </Link>          
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>
          <Button 
            className='flex flex-1 font-bold bg-orange-400 hover:bg-orange-600'
            onClick={()=> logout()}
            >Logout </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

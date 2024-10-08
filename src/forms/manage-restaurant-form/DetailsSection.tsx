import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"


function DetailsSection() {
  
  const { control } = useFormContext()

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold" >Details</h2>
        <FormDescription>
          enter the detais of your restaurant
        </FormDescription>
      </div>
      <FormField control={control} name="restaurantName" render={({field})=>(
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input {...field} className="bg-white"></Input>
          </FormControl>
          <FormMessage />
      </FormItem>)}/>
      <div className="flex gap-4 ">  
        <FormField control={control} name="city" render={({field})=>(
          <FormItem className="flex-1">
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white"></Input>
            </FormControl>
            <FormMessage />
        </FormItem>)}/>

        <FormField control={control} name="country" render={({field})=>(
          <FormItem className="flex-1">
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white"></Input>
            </FormControl>
            <FormMessage />
        </FormItem>)}/>
      </div>
      
      <FormField control={control} name="deliveryPrice" render={({field})=>(
        <FormItem className="max-w-[25%]">
          <FormLabel>Delivery price (rupees)</FormLabel>
          <FormControl>
            <Input {...field} className="bg-white" placeholder="80"></Input>
          </FormControl>
          <FormMessage />
      </FormItem>)}/>    
      
      <FormField control={control} name="estimatedDeliveryTime" render={({field})=>(
        <FormItem className="max-w-[25%]">
          <FormLabel>Estimated delivery time (minutes)</FormLabel>
          <FormControl>
            <Input {...field} className="bg-white" placeholder="30"></Input>
          </FormControl>
          <FormMessage />
      </FormItem>)}/>  
    </div>

  )
}

export default DetailsSection
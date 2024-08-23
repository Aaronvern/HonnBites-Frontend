import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 animate-spin" />
      loading..
    </Button>
  )
}

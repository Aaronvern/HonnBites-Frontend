import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex justify-center text-xl font-bold hover:text-orange-500"
      >
        User Profile
      </Link>

      <Link
        to="/manage-restaurant"
        className="flex justify-center text-xl font-bold hover:text-orange-500"
      >
        Manage Restaurant
      </Link>

      <Button
        className="bg-orange-500 flex text-center px-3 font-extrabold text-xl py-5  hover:bg-red-500 "
        onClick={() => logout()}
      >
        logout
      </Button>
    </>
  );
}

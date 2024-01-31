import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const Profile = () => {
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="hover:border-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center">
            <CgProfile className="size-5 mr-2 " />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <IoDocumentTextOutline className="size-5 mr-2" /> All Documents
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <IoSettingsOutline className="size-5 mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="hover:!bg-violet-800 hover:font-bold hover:!text-white flex items-center">
                <CiLogin className="size-5 mr-4" /> Log Out
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Log Out</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to log out ?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="hover:text-gray-800 hover:border-violet-500 text-violet-800">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction>Log Out</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;

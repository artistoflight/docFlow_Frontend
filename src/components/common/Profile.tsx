import React from "react";
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

const Profile = () => {
  return (
    <div>
      <DropdownMenu>
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
          <DropdownMenuItem className="hover:!bg-red-700 hover:!text-white flex items-center">
            <CiLogin className="size-5 mr-4" /> Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;

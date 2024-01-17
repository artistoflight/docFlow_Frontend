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
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="md:hover:border-2 hover:border-1">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute top-0 right-0 w-fit">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center">
            <CgProfile className="size-3 mr-1 md:size-5 md:mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <IoDocumentTextOutline className="size-3 mr-1 md:size-5 md:mr-2" />{" "}
            Documents
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <IoSettingsOutline className="size-3 mr-1 md:size-5 md:mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:!bg-red-700 hover:!text-white flex items-center">
            <CiLogin className="size-3 mr-1 md:size-5 md:mr-2" /> Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;

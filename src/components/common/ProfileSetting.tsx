import ProfileHeader from "./ProfileHeader";
import avatar from "../../assets/avatar.png";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const ProfileSetting = () => {
  // for Image input
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files) return;
    setImage(event.target.files[0]);
  };
  const handleUploadClick = () => {
    if(!inputRef.current) return;
    inputRef.current.click();
  };

  // for name input
  const [nameValue, setNameValue] = useState("Guest Roy");
  const [isValidName, setIsValidName] = useState(true);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
    const isValid = /^[A-Za-z\s]+$/.test(event.target.value);
    setIsValidName(isValid);
  };

  // for email input
  const [emailValue, setEmailValue] = useState("guestroy@email.com");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    const isValid =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        event.target.value
      );
    setIsValidEmail(isValid);
  };

  return (
    <div className="min-h-screen bg-violet-100">
      {/* Header */}
      <ProfileHeader />

      {/* Body Section */}
      <div className="md:container mx-auto p-4">
        {/* update Input Section */}
        <div className="m-5 border-2 border-violet-300 h-fit rounded-lg overflow-hidden">
          {/* Heading Part */}
          <div className="p-4 border-b-2 border-violet-300">
            <p className="text-xl font-semibold">Profile</p>
            <p>Manage settings for your docFlow profile</p>
          </div>

          {/* Input Part */}
          <div className="p-4 border-b-2 border-violet-300">
            <div className="flex h-fit items-center">
              <div className="h-16 w-16 rounded-full overflow-hidden bg-white">
                {image ? (
                  <img
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                    alt="upload image"
                    className="object-cover"
                  />
                ) : (
                  <img src={avatar} alt="avatar" className="object-cover" />
                )}
              </div>
              <div className="ml-5">
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  onChange={handleImageChange}
                />
                <p className="font-semibold mb-1">Profile image</p>
                <div
                  onClick={handleUploadClick}
                  className="cursor-pointer py-2 px-5 rounded-lg border-2 font-semibold  border-violet-700 bg-white text-violet-700">
                  Upload Photo
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="py-1 font-semibold">Full name</p>
              <input
                type="text"
                onChange={handleNameChange}
                value={nameValue}
                className={
                  "border-2 bg-transparent outline-none w-full rounded-sm py-1 px-3 " +
                  (isValidName
                    ? "focus:border-violet-400 border-violet-300"
                    : "focus:border-red-400 border-red-300")
                }
              />
            </div>
            <div className="my-5">
              <p className="py-1 font-semibold">Email</p>
              <input
                type="email"
                onChange={handleEmailChange}
                value={emailValue}
                className={
                  "border-2 bg-transparent outline-none w-full rounded-sm py-1 px-3 " +
                  (isValidEmail
                    ? "focus:border-violet-400 border-violet-300"
                    : "focus:border-red-400 border-red-300")
                }
              />
            </div>
          </div>

          {/* Update Part */}
          <div className="bg-violet-300 h-24 flex justify-end items-end p-4">
            <div
              className={
                "py-2 px-5 bg-violet-500 hover:bg-violet-700 rounded-lg hover:shadow-md text-white font-bold " +
                (isValidEmail && isValidName
                  ? "cursor-pointer"
                  : "cursor-not-allowed")
              }>
              Update
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div className="m-5 border-2 border-violet-300 h-fit rounded-lg overflow-hidden">
          {/* Heading Part */}
          <div className="p-4 border-b-2 border-violet-300">
            <p className=" font-semibold text-red-700">Danger zone</p>
            <p>Be careful.Acount deletion cannot be undone.</p>
          </div>

          {/* Delete button */}
          <div className="bg-violet-300 h-fit flex justify-end p-4">
            <Dialog>
              <DialogTrigger>
                <div className="py-2 px-5 bg-red-500 hover:bg-red-700 rounded-lg hover:shadow-md text-white font-bold cursor-pointer">
                  Delete account
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. Are you sure you want to
                    permanently delete this file from our servers?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="!bg-red-700 hover:!bg-red-500">
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;

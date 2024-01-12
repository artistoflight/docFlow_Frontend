import { useContext, useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Profile from "../common/Profile";
import { HiddenTemplateContext } from "../common/Provider";
import { RxCross1 } from "react-icons/rx";

const AllDocHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleClearInput = () => {
    setInputValue("");
    document.getElementById("searchInput").focus();
  };

  function showMainHeader() {
    setHiddenTempValue(false);
  }
  const { hiddenTempValue, setHiddenTempValue } = useContext(
    HiddenTemplateContext
  );

  return (
    <>
      <header className=" p-4 w-full border-b-2 border-violet-200 h-16">
        {hiddenTempValue ? (
          <div className="flex items-center w-full h-full">
            <button
              className="p-2 hover:bg-violet-100 rounded-full relative left-0 mr-3"
              onClick={showMainHeader}>
              <FaArrowLeft className="size-5 text-violet-500 m" />
            </button>
            <p>Template gallery</p>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full h-full">
            {/* Logo */}
            <Link to={"/"}>
              <div className="flex items-center">
                <img src={Logo} className="w-10 h-10" alt="Logo" />
                <p className="ml-3 text-lg font-semibold">DocFlow</p>
              </div>
            </Link>
            {/* // search bar */}
            <div
              className={`flex w-1/2 items-center ${
                isInputFocused ? "bg-white border-1 shadow-md" : "bg-violet-100"
              } rounded-lg p-1 relative`}>
              <button
                className={`p-2 ${
                  isInputFocused ? "hover:bg-violet-100" : "hover:bg-violet-200"
                } rounded-full relative right-0`}>
                <FaSearch className="size-5 text-violet-500" />
              </button>
              <div className="flex-grow">
                <input
                  id="searchInput"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={`w-full px-4 py-1 ${
                    isInputFocused ? "bg-white" : "bg-violet-100"
                  } outline-none border-none`}
                  placeholder="Search..."
                />
              </div>
              <button
                className={`p-2 ${
                  isInputFocused ? "hover:bg-violet-100" : "hover:bg-violet-200"
                } rounded-full relative left-0 ${
                  inputValue ? "block" : "hidden"
                }`}
                onClick={handleClearInput}>
                <RxCross1 className="size-5 text-violet-500" />
              </button>
            </div>
            {/* // Profile */}
            <Profile />
          </div>
        )}
      </header>
    </>
  );
};

export default AllDocHeader;

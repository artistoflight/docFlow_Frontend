import { useState, useContext } from "react";
import TemplatePartOne from "./TemplatePartOne";
import { IoCodeOutline, IoEllipsisVerticalOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import HiddenTemplate from "./HiddenTemplate";
import { HiddenTemplateContext } from "../common/Provider";

const TemplateBody = () => {
  const [templateShow, setTemplateShow] = useState(true);

  const HideTemplateBody = () => {
    setTemplateShow(false);
  };

  const showHiddenTemplate = () => {
    setHiddenTempValue(true);
  };
  const { hiddenTempValue, setHiddenTempValue } = useContext(
    HiddenTemplateContext
  );
  // Step 2: Wrap the component with the context provider
  return (
    <div className="bg-violet-100 w-full">
      <div
        className={`w-2/3 py-10 m-auto ${templateShow ? "block" : "hidden"}`}>
        {/* upper section template */}
        <div className="py-3 px-5">
          <div
            className={
              hiddenTempValue
                ? "hidden"
                : "flex " + " justify-between items-center "
            }>
            <div className="py-2">Start a new document</div>
            <div className="flex h-fit items-center">
              <button
                className="relative flex items-center rounded-sm h-fit py-1 px-3 bg-inherit hover:bg-violet-200"
                onClick={showHiddenTemplate}>
                Template Gallery
                <IoCodeOutline className="ml-2 size-3 rotate-90" />
                <p className="text-violet-200 text-lg absolute right-0">|</p>
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-violet-200 h-8 w-8 flex justify-center items-center rounded-full">
                  <IoEllipsisVerticalOutline />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    className="!border-1 hover:!bg-red-200"
                    onClick={HideTemplateBody}>
                    Hide all templates
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className={hiddenTempValue ? "block" : "hidden " + "py-2"}>
            Recently featured all templates
          </div>
        </div>
        {/* Template 1 */}
        <TemplatePartOne />
        {/* Hidden Templates */}
        <HiddenTemplate/>
      </div>
    </div>
  );
};

export default TemplateBody;

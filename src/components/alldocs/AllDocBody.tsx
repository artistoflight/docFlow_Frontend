import { useContext } from "react";
import TemplateBody from "./TemplateBody";
import UserDocumentsBody from "./UserDocumentsBody";
import { HiddenTemplateContext } from "../common/Provider";

const AllDocBody = () => {
  const { hiddenTempValue } = useContext(HiddenTemplateContext);
  return (
    <div className="relative bg-white ">
      <TemplateBody />
      {hiddenTempValue ? null : <UserDocumentsBody />}
    </div>
  );
};

export default AllDocBody;

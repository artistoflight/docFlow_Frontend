import { useContext } from "react";
import TemplateBody from "./Templatebody";
import UserDocumentsBody from "./UserDocumentsBody";
import { HiddenTemplateContext } from "../common/Provider";

const AllDocBody = () => {
  const { hiddenTempValue } = useContext(HiddenTemplateContext);
  return (
    <div className="relative top-16 bg-white">
      <TemplateBody />
      {hiddenTempValue ? null : <UserDocumentsBody />}
    </div>
  );
};

export default AllDocBody;

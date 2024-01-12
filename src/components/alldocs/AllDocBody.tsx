import { useContext } from "react";
import TemplateBody from "./Templatebody";
import UserDocumentsBody from "./UserDocumentsBody";
import { HiddenTemplateContext } from "../common/Provider";

const AllDocBody = () => {
  const { hiddenTempValue } = useContext(HiddenTemplateContext);
  return (
    <div>
      <TemplateBody />
      {hiddenTempValue ? null : <UserDocumentsBody />}
    </div>
  );
};

export default AllDocBody;

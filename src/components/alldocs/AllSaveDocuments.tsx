import { TbCalendarSad } from "react-icons/tb";
import { templateDetails } from "../common/ConstantTemp";
import SaveDocCard from "./SaveDocCard";

const AllSaveDocuments = () => {
  return (
    <div className="flex flex-wrap">
      {templateDetails[6].length ? (
        templateDetails[6].map((each, i) => {
          return (
            <SaveDocCard
              ImgC={each.img}
              Name={each.name}
              SubTitle={each.subtitile}
              key={0 * 10 + i}
            />
          );
        })
      ) : (
        <div className="m-10 h-40 w-full p-5 border shadow-lg flex flex-col justify-center items-center">
          <p className="flex font-bold md:text-lg items-center text-violet-700 text-center"><TbCalendarSad className="h-10 w-10  mr-2" /> No text documents yet</p>
          <p className="pt-3 text-center">
            Select a blank document or choose another template above to get
            started
          </p>
        </div>
      )}
    </div>
  );
};

export default AllSaveDocuments;

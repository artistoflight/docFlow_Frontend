import EachDocCard from "./EachDocCard";
import { templateDetails } from "../common/ConstantTemp";
const TemplatePartOne = () => {
  return (
    <div className="flex flex-wrap justify-start w-full">
      {templateDetails[0].map((each,i) => {
        return (
          <EachDocCard
            ImgC={each.img}
            Name={each.name}
            SubTitle={each.subtitile}
            key={0*10+i}
          />
        );
      })}
    </div>
  );
};

export default TemplatePartOne;

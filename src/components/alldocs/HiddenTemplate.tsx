import EachDocCard from "./EachDocCard";
import { templateDetails } from "../common/ConstantTemp";
import { HiddenTemplateContext } from "../common/Provider";
import { useContext } from "react";


const HiddenTemplate = () => {
  const { hiddenTempValue} = useContext(
    HiddenTemplateContext
  );
  return (
    <div className={hiddenTempValue ? "block" : "hidden "}>
      <div>
        <div className="text-md py-3 px-5 ">CVs</div>
        <div className="flex flex-wrap">
          {templateDetails[1].map((each, i) => {
            return (
              <EachDocCard
                ImgC={each.img}
                Name={each.name}
                SubTitle={each.subtitile}
                key={1*10+i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-md py-3 px-5 ">Letter</div>
        <div className="flex flex-wrap">
          {templateDetails[2].map((each, i) => {
            return (
              <EachDocCard
                ImgC={each.img}
                Name={each.name}
                SubTitle={each.subtitile}
                key={2*10+i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-md py-3 px-5">Personal</div>
        <div className="flex flex-wrap">
          {templateDetails[3].map((each, i) => {
            return (
              <EachDocCard
                ImgC={each.img}
                Name={each.name}
                SubTitle={each.subtitile}
                key={3*10+i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-md py-3 px-5">Works</div>
        <div className="flex flex-wrap">
          {templateDetails[4].map((each, i) => {
            return (
              <EachDocCard
                ImgC={each.img}
                Name={each.name}
                SubTitle={each.subtitile}
                key={4*10+i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div className="text-md py-3 px-5">Educational</div>
        <div className="flex flex-wrap">
          {templateDetails[5].map((each, i) => {
            return (
              <EachDocCard
                ImgC={each.img}
                Name={each.name}
                SubTitle={each.subtitile}
                key={5*10+i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HiddenTemplate;

const EachDocCard = ({ ImgC, Name, SubTitle }) => {
  const containerStyles =
    " w-full rounded-sm cursor-pointer border border-gray-400 hover:border-violet-500 hover:border-2 overflow-hidden";
  return (
    <div className="w-1/3 md:w-1/6">
      <div className="w-4/5 mx-auto">
        <div className={containerStyles}>
          <img src={ImgC} className="w-full" />
        </div>
        <div className="p-2">
          <div className="text-gray-900 font-bold text-xs">{Name}</div>
          <div className="text-sm text-gray-600">{SubTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default EachDocCard;

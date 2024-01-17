import roundImg from "../assets/RoundCreate.png";

const RoundCreateCard = () => {
  return (
    <div className="cursor-pointer w-12 h-12 md:w-16 md:h-16  lg:w-24 lg:h-24 rounded-full border md:border-2 shadow-lg hover:border-violet-700 overflow-hidden z-50 fixed bottom-10 right-10">
      <img src={roundImg} alt="round Create img" className="w-full h-full" />
    </div>
  );
};

export default RoundCreateCard;

import AllDocHeader from "./AllDocHeader";
import AllDocBody from "./AllDocBody";
const AllDocs = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col text-sm md:text-base">
        <AllDocHeader />
        <AllDocBody />
      </div>
    </>
  );
};

export default AllDocs;

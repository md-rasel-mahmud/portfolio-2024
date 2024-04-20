type props = {
  leftContents: React.ReactNode;
  children: React.ReactNode;
};

const BackgroundWrapper = ({
  leftContents,
  children: rightContents,
}: props) => {
  return (
    <div className="backdrop-blur-[100px] p-2 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 mt-5 items-start">
          {/* LEFT_BAR */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5 justify-center items-center">
            {leftContents}
          </div>

          {/* RIGHT_BAR */}
          <div className="w-full lg:w-2/3 overflow-y-auto h-[92vh] bg-base-100/50 p-3 rounded-lg">
            {rightContents}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrapper;

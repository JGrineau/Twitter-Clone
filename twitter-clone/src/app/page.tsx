// import React from "react";
import LeftSidebar from "./components/leftSideBar";

const home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black px-6 ">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left Side bar  */}
        <LeftSidebar />

        <main className="ml-[275px] p-5 mx-6 flex w-[600px] min-h-screen g-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-500">
          <h1 className="text-2xl font-bold">Home</h1>
        </main>
        {/*<section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default home;

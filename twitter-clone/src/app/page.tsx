// import React from "react";
import LeftSidebar from "./components/leftSideBar";

const home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left Side bar  */}
        <LeftSidebar />

        {/* <main>Home Timeline</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default home;

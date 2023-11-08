// import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiFileListLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  { title: "X", icon: FaSquareXTwitter },
  { title: "Home", icon: AiOutlineHome },
  { title: "Explore", icon: HiOutlineHashtag },
  { title: "Notifications", icon: HiOutlineBell },
  { title: "Messages", icon: HiOutlineEnvelope },
  { title: "Lists", icon: RiFileListLine },
  { title: "Bookmarks", icon: BsBookmark },
  { title: "Profile", icon: CiUser },
];

const home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left Side bar  */}
        <section className="fixed w-72 flex flex-col h-screen space-y-4 items-stretch">
          <div className="flex flex-col h-screen space-y-4 items-stretch">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 transition duration-200 flex items-center text-2xl justify-start w-fit space-x-2 rounded-3xl py-2 px-6"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "X" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="w-full rounded-full bg-primary p-4 m-4 text-center hover:bg-opacity-70 transition duration-200">
              Post
            </button>
          </div>
          <button className="w-full rounded-full flex items-center space-x-2 bg-transparent p-4 m-4 text-center hover:bg-white/10 transition duration-200">
            <div className="rounded-full bg-slate-400 w-8 h-8 "></div>
            <div className="text-left text-xs">
              <div className="font-semibold">Club of JP Grineau</div>
              <div className="">@JP_Grineau</div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        {/* <main>Home Timeline</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default home;

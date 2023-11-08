// import React from "react";

import { BsFillHouseDoorFill } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiFileListLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  { title: "Home", icon: BsFillHouseDoorFill },
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
        <section className="fixed w-72 flex flex-col">
          <Link href={"/"}>
            <FaSquareXTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className="hover:bg-white/20 transition duration-200 flex items-center justify-start w-fit justify-center space-x-2 rounded-3xl p-4"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        {/* <main>Home Timeline</main>
        <section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default home;

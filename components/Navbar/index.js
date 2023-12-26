"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Close, HamburgerButton } from "@icon-park/react";
import { PrimaryButton, SecondaryButton } from "@cp/Buttons";
// import { logo, lock, hamburgerMenu, close } from "../assets";

const navlinks = [
  { text: "Box office", url: "/page" },
  { text: "Top 10s", url: "/page" },
  { text: "Watch history", url: "/page" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <>
      <div className="w-full h-[60px] z-50 fixed">
        <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center px-2 md:px-5">
          <>
            <Image
              src="/next.svg"
              className="h-[25px] invert"
              alt="YouFlix"
              width={100}
              height={24}
              priority
            />
          </>

          {/* LINKS 4 LG */}

          <div className="hidden md:flex items-center ">
            <ul className="flex gap-7">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className=" hover:underline underline-offset-2"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVBAR CTAs LG */}
          <div className="hidden md:flex gap-4">
            <SecondaryButton content="Login" />
            <PrimaryButton content="Sign up" />
          </div>

          {/* HAMBURGER D<SM */}
          <div className="md:hidden">
            <>
              <button
                className="px-4 py-2 rounded-md border font-bold"
                onClick={handleClick}
              >
                {toggle ? <Close /> : <HamburgerButton />}
              </button>
            </>
          </div>
        </div>

        <div
          className={
            toggle
              ? "absolute z-10 p-4 bg-black/10 backdrop-blur-md w-full px-8 md:hidden border-b"
              : "hidden"
          }
        >
          <ul>
            {navlinks.map((link, index) => (
              <li key={index} className="p-4 hover:bg-gray-100/10">
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}

            <div className="flex flex-col my-4 gap-4">
              <button className="border border-[#25775d] flex justify-center items-center bg-transparent px-6 gap-2 py-4">
                Login
              </button>
              <PrimaryButton content="Sign up for free" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

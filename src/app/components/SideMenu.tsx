'use client'
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { routes } from "../lib/constant";
import React from "react";


const SideMenu = () => {
  // define the states
  const [isOpen, setOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const menuItems = [
    { name: "Search", icon: <IoIosSearch fontSize={'1.3rem'} />, link: "/search" },
    { name: "Cart", icon: <BsBag />, link: "/cart" },
    { name: "Account", icon: <FaRegUser />, link: "/account" },
    { name: "Language", icon: <MdOutlineLanguage fontSize={'1.2rem'} />, link: "/" },
  ];
  const navItems = [
    { name: "iPhone", link: "/iPhone" },
    { name: "Parts", link: "/parts" },
    { name: "Auctions", link: "/auctions" },
    { name: "Events", link: "/events" },
    { name: "About us", link: "/aboutUs" },
  ];

  return (

    <nav className="content-container px-4 flex items-center justify-between max-w-full h-full my-0 mx-auto">
      <ul className="hidden lg:flex sm:flex md:flex justify-between w-full items-center h-12">
        <li className="cursor"><Hamburger toggled={isOpen} size={20} toggle={setOpen} /></li>
        <li className="cursor logo">INTRANINE</li>
        <li className="cursor"><BsBag /></li>
        {isOpen && (
          <div className="fixed left-0 shadow-4xl right-0 top-[3rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
            <ul className="grid gap-2">
              {routes.map((route) => {


                return (
                  <li
                    key={route.title}
                    className="w-full p-[0.08rem]  bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 cursor-pointer"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5  bg-neutral-950"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>

                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </ul>
      <main className="md:hidden sm:hidden lg:hidden flex w-full h-full">
        <div className="flex-1 basis-0  flex  ">
          <div className="h-full flex items-center m-1.5">
            <h1 className="cursor logo">INTRANINE</h1>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-14">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setActiveNavItem(item.name)}
                className={`cursor ${activeNavItem === item.name ? 'underline nav-item' : ''}`}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-6  flex-1 basis-0 justify-end">
          <ul className="flex gap-5">
            {menuItems.map((item) => (
              <li className='cursor' key={item.name}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </nav>

  );
};

export default React.memo(SideMenu);

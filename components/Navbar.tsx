"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/wecazoo-logo.svg";
import LanguageSelector from "./LanguageSelector";
import { MdLiveTv } from "react-icons/md";
import { FaDice } from "react-icons/fa6";
import { PiPokerChipFill, PiShieldStarFill } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import UserActions from "@/components/UserActions";

const isLoggedIn = true;

const NavLinks = () => (
  <>
    <li>
      <Link
        className="flex items-center text-foreground text-sm font-medium whitespace-nowrap"
        href="#"
      >
        All Games
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="flex items-center text-muted hover:text-foreground transition-colors whitespace-nowrap"
      >
        <MdLiveTv size={20} className="mr-1.5 xl:mr-2 flex-shrink-0" />
        <span className="text-sm">Live Sport</span>
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="flex items-center text-muted hover:text-foreground transition-colors whitespace-nowrap"
      >
        <FaDice size={20} className="mr-1.5 xl:mr-2 flex-shrink-0" />
        <span className="text-sm">Casino</span>
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="flex items-center text-muted hover:text-foreground transition-colors whitespace-nowrap"
      >
        <PiPokerChipFill size={20} className="mr-1.5 xl:mr-2 flex-shrink-0" />
        <span className="text-sm">Live Casino</span>
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="flex items-center text-muted hover:text-foreground transition-colors whitespace-nowrap"
      >
        <IoGameController size={20} className="mr-1.5 xl:mr-2 flex-shrink-0" />
        <span className="text-sm">Virtual Games</span>
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="flex items-center text-[#B98D1B] whitespace-nowrap"
      >
        <PiShieldStarFill size={20} className="mr-1.5 xl:mr-2 flex-shrink-0" />
        <span className="text-sm">Promotion</span>
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-fit bg-[#130D25]">
      <div className="container flex justify-between items-center py-4 px-10 md:px-6 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            priority
            src={Logo}
            alt="Wecazoo Logo"
            className="h-9 lg:h-11 w-auto"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/60 hover:text-foreground/80 hover:bg-[#1F1635] transition-colors"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <ul className="flex flex-col gap-4">
                  <NavLinks />
                </ul>
                <LanguageSelector />
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Sign Up</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow-0">
          <ul className="flex gap-4 xl:gap-6 items-center">
            <NavLinks />
          </ul>
        </nav>

        {/* User Actions (Desktop) */}
        <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
          {/* <Search className="text-2xl font-semibold text-[#808792]/60 hover:text-[#808792]/100 hover:cursor-pointer" /> */}
          <LanguageSelector />
          {!isLoggedIn ? (
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="">
                Login
              </Button>
              <Button size="sm" className="border border-primary">
                Sign Up
              </Button>
            </div>
          ) : (
            <UserActions />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

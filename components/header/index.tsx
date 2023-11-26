"use client";

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Wallet from "./components/wallet";
import Country from "./components/country";
import UserInfo from "./components/user-info";
import AuthSection from "./components/auth-section";
import Brand from "./components/brand";

const Header = () => {
  const [isLoggin, setisLoggin] = useState<boolean>(true)

  return (
    <header className="p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="cursor-pointer flex items-center justify-center p-2 rounded-md bg-slate-800 h-9 w-9 text-slate-400">
          <BiMenu />
        </div>
        <Brand />
        <Country />
      </div>
      {!isLoggin ? (
        <div className="flex items-center gap-4">
          <Wallet amount={100} />
          <UserInfo />
        </div>
      ) : (
        <AuthSection />
      )}
    </header>
  );
};

export default Header;

"use client";

import { signOut } from "next-auth/react";

const Settings = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="cursor-pointer">
        <img src="/volume-off-icon.png" alt="icon" />
      </div>
      <div className="cursor-pointer" onClick={() => signOut()}>
        <img src="/rules-icon.png" alt="icon" />
      </div>
    </div>
  );
};

export default Settings;

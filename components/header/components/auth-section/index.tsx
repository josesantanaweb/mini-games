"use client";

import React from "react";
import Button from "@/components/ui/button";

const AuthSection = () => {

  return (
    <div className="flex items-center gap-4">
      <Button label="Registro" onClick={() => console.log()} />
      <Button label="Login" onClick={() => console.log()} variant="secondary" />
    </div>
  );
};

export default AuthSection;

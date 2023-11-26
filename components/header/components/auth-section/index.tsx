"use client";

import React from "react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const AuthSection = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <Button label="Registro" onClick={() => console.log()} size="small" />
      <Button
        label="Login"
        onClick={() => router.push('/login')}
        variant="secondary"
        size="small"
      />
    </div>
  );
};

export default AuthSection;

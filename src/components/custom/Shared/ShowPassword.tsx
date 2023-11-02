"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Digite sua senha"
      />
      <Button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </>
  );
}

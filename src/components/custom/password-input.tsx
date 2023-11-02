"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PasswordInputProps = {
  id: string;
  placeholder: string;
};

export default function PasswordInput({ id, placeholder }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <Button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (
          <EyeOffIcon size={18} className="text-muted-foreground" />
        ) : (
          <EyeIcon size={18} className="text-muted-foreground" />
        )}
      </Button>
    </>
  );
}

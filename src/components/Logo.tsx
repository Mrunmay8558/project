import React from "react";
import { Gem } from "lucide-react";
import phoenixLogo from "../assets/images/phoenix-logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img src={phoenixLogo} alt="Phoenix Logo" className="h-12 w-auto" />
    </div>
  );
}

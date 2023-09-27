import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import { Container } from "@mui/material";

import React, { ReactElement, ReactNode } from "react";

interface MainLoyaoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLoyaoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Player />
    </>
  );
}

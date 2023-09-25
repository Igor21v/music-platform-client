import Navbar from "@/components/Navbar";
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
    </>
  );
}

import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";

import React, { ReactElement } from "react";

interface MainLoyaoutProps {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLoyaoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

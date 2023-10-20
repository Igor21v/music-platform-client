import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import { Container } from "@mui/material";
import Head from "next/head";

import React, { ReactElement, ReactNode } from "react";

interface MainLoyaoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function MainLayout(props: MainLoyaoutProps) {
  const {
    children,
    title = "Музыкальная площадка",
    description = "",
    keywords = "Музыка, треки, артисты",
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            "Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым. " +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {children}
      <Player />
    </>
  );
}

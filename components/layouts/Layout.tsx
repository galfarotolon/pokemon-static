import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "./ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Gruktor" />
        <meta name="description" content={`Info about Pokemon ${title}`} />
        <meta
          name="keywords"
          content={`Info about Pokemon ${title}, pokemon, pokedex`}
        />
      </Head>
      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};

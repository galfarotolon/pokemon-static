import React from "react";
import { Text, Spacer, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        alt="app icon"
        width={70}
        height={70}
      />

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
};

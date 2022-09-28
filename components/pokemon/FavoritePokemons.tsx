import { Grid } from "@nextui-org/react";
import React from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons = ({ favoritePokemons }: Props) => {
  return (
    <Grid>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {favoritePokemons.map((id: number) => (
          <FavoriteCardPokemon id={id} key={id} />
        ))}
      </Grid.Container>
    </Grid>
  );
};

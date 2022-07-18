import React, { useContext } from "react";
import { Pokemon } from "api";
import { PokeBallSpin } from "assets";
import { PokeContextType, PokeContext } from "context";
import { capitalize } from "utils";
import { PokeImg } from "components";

import { Container } from "./styles";

interface Props {
  poke: Pokemon;
  active: boolean;
  empty: boolean;
}

export const BoxCard: React.FunctionComponent<Props> = ({
  poke,
  active,
  empty,
}) => {
  const { dispatch } = useContext(PokeContext) as PokeContextType;

  const handleSelectPoke = () => {
    dispatch({
      type: "SELECT_FROM_LIST",
      selectedFromList: active ? undefined : poke,
    });
  };

  return (
    <Container
      data-testid="boxCardContainer"
      selected={active}
      isEmpty={empty}
      onClick={handleSelectPoke}
      role={"button"}
      aria-label={
        empty ? `Vazio` : `${capitalize(poke.name)} - LVL ${poke.pokeLvl}`
      }
    >
      <PokeImg src={poke.pokeImg} placeholderImg={PokeBallSpin} />
    </Container>
  );
};

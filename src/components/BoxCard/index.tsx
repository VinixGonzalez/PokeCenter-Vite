import React, { useContext } from "react";
import { Pokemon } from "../../api/models";
import { PokeBallSpin } from "../../assets";
import { PokeContextType } from "../../context/models";
import { PokeContext } from "../../context/pokeContext";

import { capitalize } from "../../utils";
import { PokeImg } from "../PokeImg";

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

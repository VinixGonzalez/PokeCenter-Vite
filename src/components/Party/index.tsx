import React, { useContext, useEffect, useMemo } from "react";

import {
  PartyContainer,
  PartyList,
  PartyBox,
  PartyTitle,
  PokeInfo,
  PokeName,
  PokeLvl,
  RemovePoke,
  PartyInfo,
} from "./styles";
import { Pokemon } from "../../api/models";
import { PokeBallSpin } from "../../assets";
import { PokeImg } from "../PokeImg";
import { PokeContext } from "../../context/pokeContext";
import { PokeContextType } from "../../context/models";

export const Party: React.FC = () => {
  const { pokeState, dispatch } = useContext(PokeContext) as PokeContextType;

  const handleSelectFromParty = (poke: Pokemon) => {
    if (!pokeState.selectedFromList) return;

    dispatch({ type: "SELECT_FROM_PARTY", selectedFromParty: poke });
  };

  const handleRemoveFromParty = (pokeIndex: number) => {
    if (confirm("Deseja realmente libertar o Pokémon?")) {
      dispatch({ type: "REMOVE_FROM_PARTY", indexToRemove: pokeIndex });
    }
  };

  useEffect(() => {
    // check if selected from list(box) isn't empty before swap
    if (pokeState.selectedFromParty && pokeState.selectedFromList?.name) {
      dispatch({ type: "SWAP" });
    }
  }, [pokeState.selectedFromParty]);

  const partyLevel = useMemo(() => {
    return pokeState.party?.reduce((acc, poke) => {
      return acc + poke.pokeLvl;
    }, 0);
  }, [pokeState.party]);

  return (
    <PartyContainer data-testid="partyContainer">
      <PartyTitle>Party</PartyTitle>

      <PartyInfo>
        <span>Total Level: {partyLevel}</span>
      </PartyInfo>
      <PartyList>
        {pokeState.party?.map((poke, index) => (
          <PartyBox
            data-testid="partyBox"
            key={poke.pokeId}
            onClick={() => handleSelectFromParty(poke)}
          >
            <PokeImg src={poke.pokeImg} placeholderImg={PokeBallSpin} />
            <PokeInfo>
              <PokeName>{poke.name}</PokeName>
              {poke.pokeLvl ? <PokeLvl>Level {poke.pokeLvl}</PokeLvl> : "Vazio"}
            </PokeInfo>
            {poke.name && !pokeState.selectedFromList && (
              <RemovePoke
                onClick={() => handleRemoveFromParty(index)}
                title="Libertar Pokémon"
              >
                🐾
              </RemovePoke>
            )}
          </PartyBox>
        ))}
      </PartyList>
    </PartyContainer>
  );
};

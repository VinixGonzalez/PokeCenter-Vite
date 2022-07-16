import React, { useContext, useMemo } from "react";
import { toast } from "react-toastify";
import { SERVICE } from "../../api/service";
import { PokeContextType } from "../../context/models";
import { PokeContext } from "../../context/pokeContext";
import { BoxCard } from "../BoxCard";

import { BoxContainer, BoxTitle, MainContainer, UpdateBox } from "./styles";

export const Box: React.FC = () => {
  const { pokeState, dispatch } = useContext(PokeContext) as PokeContextType;

  const handleUpdateBox = async () => {
    const { list, hasError, errorMessage } = await SERVICE.updateBox(pokeState);

    if (hasError) {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    dispatch({ type: "SET_LIST", pokeList: list });
    toast.success("Box atualizado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const hasAnyEmpty = useMemo(() => {
    const anyEmpty = pokeState.list.some((x) => !x.name);
    return anyEmpty;
  }, [pokeState.list]);

  return (
    <MainContainer>
      <BoxTitle>Box</BoxTitle>
      <BoxContainer>
        {pokeState.list?.map((poke) => (
          <BoxCard
            key={poke.pokeId}
            empty={!poke.name}
            active={poke.pokeId === pokeState.selectedFromList?.pokeId}
            poke={poke}
          />
        ))}
      </BoxContainer>
      <UpdateBox disabled={!hasAnyEmpty} onClick={handleUpdateBox}>
        Atualizar Box
      </UpdateBox>
    </MainContainer>
  );
};

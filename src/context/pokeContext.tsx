import React, { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import {
  PokeAction,
  PokeContextType,
  PokeStateType,
  ProviderProps,
} from "./models";
import { Pokemon, REPOSITORY } from "../api";
import { capitalize } from "../utils";

const pokeReducer = (
  state: PokeStateType,
  action: PokeAction
): PokeStateType => {
  switch (action.type) {
    case "SET_LIST": {
      return {
        ...state,
        list: action.pokeList as Pokemon[],
      };
    }

    case "SET_PARTY": {
      return {
        ...state,
        party: action.pokeParty as Pokemon[],
      };
    }

    case "SELECT_FROM_LIST": {
      return {
        ...state,
        selectedFromList: action.selectedFromList,
        selectedFromParty: undefined,
      };
    }

    case "SELECT_FROM_PARTY": {
      return {
        ...state,
        selectedFromParty: action.selectedFromParty,
      };
    }

    case "REMOVE_FROM_PARTY": {
      try {
        const { party } = state;

        const emptyPokeSlot: Pokemon = {
          name: "",
          pokeId: uuidv4(),
          pokeImg: "",
          pokeLvl: 0,
        };

        const poke = party[action.indexToRemove as number];

        const partyFiltered = party.filter((p) => p.pokeId !== poke.pokeId);

        partyFiltered.splice(action.indexToRemove as number, 0, emptyPokeSlot);

        REPOSITORY.createParty(partyFiltered);

        toast.success(`${capitalize(poke.name)} libertado com sucesso!`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        return {
          ...state,
          party: partyFiltered,
          selectedFromList: undefined,
        };
      } catch (error) {
        console.log(error);

        toast.error(`Ocorreu um erro ao tentar libertar o Pokémon!`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        return {
          ...state,
        };
      }
    }

    case "SWAP": {
      try {
        const { list, party, selectedFromList, selectedFromParty } = state;

        const listFiltered = list?.filter((poke) => {
          return poke.pokeId !== selectedFromList?.pokeId;
        });

        const partyFiltered = party?.filter(
          (p) => p.pokeId !== selectedFromParty?.pokeId
        );

        const selectedListIndex = list?.indexOf(
          selectedFromList as Pokemon
        ) as number;

        const selectedPartyIndex = party?.indexOf(
          selectedFromParty as Pokemon
        ) as number;

        listFiltered.splice(selectedListIndex, 0, selectedFromParty as Pokemon);
        partyFiltered.splice(
          selectedPartyIndex,
          0,
          selectedFromList as Pokemon
        );

        if (!selectedFromParty?.name) {
          toast.success(
            `${capitalize(
              selectedFromList?.name as string
            )} adicionado com sucesso!`,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        } else {
          toast.success(
            `${capitalize(
              selectedFromParty?.name as string
            )} trocado por ${capitalize(
              selectedFromList?.name as string
            )} com sucesso!`,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
        }

        REPOSITORY.createParty(partyFiltered);
        REPOSITORY.createList(listFiltered);

        return {
          ...state,
          list: listFiltered,
          party: partyFiltered,
          selectedFromList: undefined,
          selectedFromParty: undefined,
        };
      } catch (error) {
        console.log(error);

        toast.error(`Ocorreu um erro ao tentar trocar os Pokémons!`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        return {
          ...state,
        };
      }
    }

    default:
      break;
  }

  return state;
};

export const INITIAL_STATE: PokeStateType = {
  list: [],
  party: [],
};

export const PokeContext = createContext<PokeContextType>(
  {} as PokeContextType
);

const PokeContextProvider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => {
  const [pokeState, dispatch] = useReducer(pokeReducer, INITIAL_STATE);

  return (
    <PokeContext.Provider value={{ dispatch, pokeState }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContextProvider;

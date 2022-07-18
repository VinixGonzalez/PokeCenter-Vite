import { Pokemon } from "api";

export interface ProviderProps {
  children: React.ReactNode;
}

export type PokeContextType = {
  dispatch: React.Dispatch<PokeAction>;
  pokeState: PokeStateType;
};

export type PokeStateType = {
  list: Pokemon[];
  party: Pokemon[];
  selectedFromParty?: Pokemon;
  selectedFromList?: Pokemon;
};

export type PokeAction = {
  type:
    | "SET_LIST"
    | "UPDATE_LIST"
    | "SET_PARTY"
    | "SELECT_FROM_LIST"
    | "SELECT_FROM_PARTY"
    | "REMOVE_FROM_PARTY"
    | "SWAP";
  pokeList?: Pokemon[];
  pokeParty?: Pokemon[];
  selectedFromParty?: Pokemon;
  selectedFromList?: Pokemon;
  indexToRemove?: number;
};

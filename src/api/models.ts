import { PokeStateType } from "../context/models";

type ResponseFormatted = {
  list: Array<Pokemon>;
  party: Array<Pokemon>;
  hasError?: boolean;
  errorMessage?: string;
};

type UpdateBoxResponseFormatted = {
  list?: Array<Pokemon>;
  hasError?: boolean;
  errorMessage?: string;
};

type Pokemon = {
  pokeId: string;
  name: string;
  pokeLvl: number;
  pokeImg: string;
};

type GetAllPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

type IPokeAPI = {
  getAllPokemons: () => Promise<ResponseFormatted>;
  updateBox: (pokeState: PokeStateType) => Promise<UpdateBoxResponseFormatted>;
};

export type {
  Pokemon,
  IPokeAPI,
  GetAllPokemonsResponse,
  ResponseFormatted,
  UpdateBoxResponseFormatted,
};

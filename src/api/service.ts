import axios from "axios";
import { useContext } from "react";
import { PokeStateType } from "../context/models";
import { PokeContext } from "../context/pokeContext";
import { pickRandom } from "../utils";
import {
  Pokemon,
  GetAllPokemonsResponse,
  IPokeAPI,
  ResponseFormatted,
  UpdateBoxResponseFormatted,
} from "./models";
import { REPOSITORY } from "./repository";

const CONFIG = {
  POKE_IMG_BASE_URL:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  BOX_SIZE: 20,
  TOTAL_POKEMONS: 1154,
  MAX_POKE_LVL: 100,
};

const _api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    Accept: "application/json",
  },
});

export const SERVICE: IPokeAPI = {
  async getAllPokemons(): Promise<ResponseFormatted> {
    try {
      const { data } = await _api.get<GetAllPokemonsResponse>(
        "pokemon?limit=26"
      );

      const pokeList: Pokemon[] = data.results.map(({ name, url }) => {
        const pokeId = url.split("/")[url.split("/").length - 2] as string;
        const pokeImg = `${CONFIG.POKE_IMG_BASE_URL}${pokeId}.png`;
        const pokeLvl = Math.floor(Math.random() * CONFIG.MAX_POKE_LVL) + 1;
        return {
          pokeId,
          name,
          pokeImg,
          pokeLvl,
        };
      });

      const { list, party } = pickRandom(pokeList);

      REPOSITORY.createList(list);
      REPOSITORY.createParty(party);

      return {
        list,
        party,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Erro na chamada API: ", error.message);
        return {
          list: [],
          party: [],
          hasError: true,
          errorMessage: error.message,
        };
      } else {
        console.log("Erro inesperado: ", error);
        return {
          list: [],
          party: [],
          hasError: true,
          errorMessage:
            "Erro inesperado ao tentar buscar a lista de Pokémons. Tente novament.",
        };
      }
    }
  },
  async updateBox(
    pokeState: PokeStateType
  ): Promise<UpdateBoxResponseFormatted> {
    try {
      debugger;
      const { data } = await _api.get<GetAllPokemonsResponse>(
        `pokemon?limit=${CONFIG.TOTAL_POKEMONS}`
      );

      const random = data.results
        .filter((poke) => {
          debugger;
          return !pokeState.party.find((pt) => {
            debugger;
            return pt.name === poke.name;
          });
        })
        .sort(() => 0.5 - Math.random())
        .slice(0, CONFIG.BOX_SIZE);

      const pokeList: Pokemon[] = random.map(({ name, url }) => {
        const pokeId = url.split("/")[url.split("/").length - 2] as string;
        const pokeImg = `${CONFIG.POKE_IMG_BASE_URL}${pokeId}.png`;
        const pokeLvl = Math.floor(Math.random() * CONFIG.MAX_POKE_LVL) + 1;
        return {
          pokeId,
          name,
          pokeImg,
          pokeLvl,
        };
      });

      REPOSITORY.createList(pokeList);

      return { list: pokeList };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Erro na chamada API: ", error.message);
        return {
          hasError: true,
          errorMessage: error.message,
        };
      } else {
        console.log("Erro inesperado: ", error);
        return {
          hasError: true,
          errorMessage:
            "Erro inesperado ao tentar atualizar a Box. Tente novamente.",
        };
      }
    }
  },
};

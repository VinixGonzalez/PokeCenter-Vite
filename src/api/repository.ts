import { Pokemon } from "./models";

const POKE_LIST_KEY = "@PokeCenter:list";
const POKE_PARTY_KEY = "@PokeCenter:party";

const REPOSITORY = {
  createList: (list: Pokemon[]) => {
    try {
      const stringifiedList = JSON.stringify(list);
      localStorage.setItem(POKE_LIST_KEY, stringifiedList);
    } catch {
      throw new Error("Erro ao salvar lista no localstorage");
    }
  },
  createParty: (party: Pokemon[]) => {
    try {
      const stringifiedParty = JSON.stringify(party);
      localStorage.setItem(POKE_PARTY_KEY, stringifiedParty);
    } catch {
      throw new Error("Erro ao salvar party no localstorage");
    }
  },
  getData: () => {
    try {
      const listStr = localStorage.getItem(POKE_LIST_KEY);
      const partyStr = localStorage.getItem(POKE_PARTY_KEY);
      if (typeof listStr === "string" && typeof partyStr === "string") {
        const list: Pokemon[] = JSON.parse(listStr);
        const party: Pokemon[] = JSON.parse(partyStr);
        return { list, party };
      }

      return null;
    } catch {
      throw new Error("Erro ao buscar lista no localstorage");
    }
  },
};

export { REPOSITORY };

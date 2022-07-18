import { Pokemon } from "../api";

const capitalize = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

const pickRandom = (pokeList: Pokemon[]) => {
  const party = pokeList.sort(() => 0.5 - Math.random()).slice(0, 6);
  const list = pokeList.filter((poke) => {
    return !party.find((pokeParty) => {
      return pokeParty.name === poke.name;
    });
  });

  return {
    party,
    list,
  };
};

export { capitalize, pickRandom };

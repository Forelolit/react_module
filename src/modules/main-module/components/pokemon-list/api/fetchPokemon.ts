import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export const fetchPokemons = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
}): Promise<pokemons> => {
  const res = await axios.get(pageParam);
  return res.data;
};

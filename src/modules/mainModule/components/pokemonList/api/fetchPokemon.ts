import axios from 'axios';

import type { PokemonListResponse } from '../types/types';

export const fetchPokemons = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
}): Promise<PokemonListResponse> => {
  const res = await axios.get(pageParam);
  return res.data;
};

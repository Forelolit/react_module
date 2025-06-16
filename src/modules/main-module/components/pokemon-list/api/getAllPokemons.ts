import axios from 'axios';

import type { PokemonListResponse } from '../types/types';

export const getAllPokemons = async (): Promise<PokemonListResponse> => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
  return res.data;
};

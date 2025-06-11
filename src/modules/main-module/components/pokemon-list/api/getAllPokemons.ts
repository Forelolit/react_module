import axios from 'axios';

import type { PokemonDetail, PokemonListResponse } from '../types/types';

export const getAllPokemons = async (): Promise<PokemonListResponse> => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
  return res.data;
};

export const getPokemonDetails = async (url: string): Promise<PokemonDetail> => {
  const res = await axios.get(url);
  return res.data;
};

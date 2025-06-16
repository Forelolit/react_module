import axios from 'axios';

import type { PokemonDetail } from '../types/types';

export const getPokemonDetails = async (url: string): Promise<PokemonDetail> => {
  const res = await axios.get(url);
  return res.data;
};

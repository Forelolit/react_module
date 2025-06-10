import axios from 'axios'

import type { GetAllPokemonResponse } from '../types/types'

export const getAllPokemons = async (): Promise<GetAllPokemonResponse> => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
    params: {
      offset: 0,
      limit: 20,
    },
  })
  return response.data
}

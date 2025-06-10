interface PokemonShort {
  name: string
  url: string
}

export interface GetAllPokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonShort[]
}

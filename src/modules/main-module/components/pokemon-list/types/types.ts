export interface PokemonListResponse {
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonSprites {
  front_default?: string;
  back_default?: string;
  front_shiny?: string;
  back_shiny?: string;
  other?: {
    'official-artwork'?: {
      front_default?: string;
    };
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: PokemonSprites;
}

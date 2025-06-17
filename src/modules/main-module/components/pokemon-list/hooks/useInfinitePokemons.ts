import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchPokemons } from '../api/fetchPokemon';

export const useInfinitePokemons = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    initialPageParam: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
  });
};

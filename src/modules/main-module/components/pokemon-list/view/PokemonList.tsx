import { Typography } from '@ui/typography';
import { useQueries, useQuery, type UseQueryResult } from '@tanstack/react-query';
import { Card } from '@ui/card';
import type { FC } from 'react';

import type { PokemonDetail, PokemonListResponse } from '../types/types';
import { getAllPokemons, getPokemonDetails } from '../api/getAllPokemons';

import styles from './PokemonList.module.scss';

export const PokemonList: FC = () => {
  const {
    data: listData,
    isLoading,
    isError,
  } = useQuery<PokemonListResponse>({
    queryKey: ['pokemon-data'],
    queryFn: getAllPokemons,
  });

  const pokemonQueries: UseQueryResult<PokemonDetail>[] = useQueries({
    queries: (listData?.results ?? []).map((item) => ({
      queryKey: ['pokemon-detail', item.name],
      queryFn: () => getPokemonDetails(item.url),
      enabled: !!item.url,
    })),
  });

  if (isLoading) return <p>Загрузка списка покемонов...</p>;
  if (isError) return <p>Ошибка при получении списка</p>;

  const isAnyLoading = pokemonQueries.some((q) => q.isLoading);
  const isAnyError = pokemonQueries.some((q) => q.isError);

  if (isAnyLoading) return <p>Загрузка данных о покемонах...</p>;
  if (isAnyError) return <p>Ошибка при загрузке деталей покемона</p>;

  const pokemons = pokemonQueries.map((q) => q.data!).filter(Boolean);

  return (
    <>
      <Typography as="h2" className={styles.title}>
        Pokemon list
      </Typography>

      <Typography as="ulList">
        {pokemons.map((pokemon) => (
          <Typography as="list_item" key={pokemon.id} className={styles.base}>
            <Card
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              imageAlt={pokemon.name}
            ></Card>
          </Typography>
        ))}
      </Typography>
    </>
  );
};

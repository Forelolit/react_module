import { Typography } from '@ui/typography';
import { useQueries, useQuery } from '@tanstack/react-query';
import { Card } from '@ui/card';
import { useState, type FC, useMemo } from 'react';
import { CustomButton } from '@ui/button';
import { useScrollbarHide } from '@utils/hooks/useScrollbarHide';
import { Modal } from '@ui/modal';
import clsx from 'clsx';

import type { PokemonDetail, PokemonListResponse } from '../types/types';
import { getAllPokemons } from '../api/getAllPokemons';
import { getPokemonDetails } from '../api/getPokemonDetails';

import styles from './PokemonList.module.scss';

export const PokemonList: FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);
  const { isOpen, setIsOpen } = useScrollbarHide();

  const { data: listData } = useQuery<PokemonListResponse>({
    queryKey: ['pokemon-data'],
    queryFn: getAllPokemons,
  });

  const pokemonQueries = useQueries({
    queries: (listData?.results ?? []).map((item) => ({
      queryKey: ['pokemon-detail', item.name],
      queryFn: () => getPokemonDetails(item.url),
      enabled: !!item.url,
    })),
  });

  const pokemons = useMemo(
    () => pokemonQueries.map((q) => q.data).filter(Boolean) as PokemonDetail[],
    [pokemonQueries],
  );

  const handleOpenModal = (pokemon: PokemonDetail) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
  };

  return (
    <>
      <Typography as="h2" className={styles.title}>
        Pokemon list
      </Typography>

      <Typography as="ulList" listStyle="none" className={clsx(styles.flex)}>
        {pokemons.map((pokemon) => (
          <Typography as="list_item" key={pokemon.id} className={clsx(styles.base)}>
            <Card name={pokemon.name} image={pokemon.sprites.front_default} imageAlt={pokemon.name}>
              <CustomButton size="large" onClick={() => handleOpenModal(pokemon)}>
                <Typography color="white">Info</Typography>
              </CustomButton>
            </Card>
          </Typography>
        ))}
      </Typography>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedPokemon && (
          <div className={styles.modalContent}>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <Typography as="h3" color="white">
              {selectedPokemon.name}
            </Typography>
            <Typography color="white">
              Height: {selectedPokemon.height}, Weight: {selectedPokemon.weight}
            </Typography>
            <Typography color="white">
              Types: {selectedPokemon.types.map((t) => t.type.name).join(', ')}
            </Typography>
          </div>
        )}
      </Modal>
    </>
  );
};

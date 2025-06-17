import { Typography } from '@ui/typography';
import { Card } from '@ui/card';
import { useState, type FC, useEffect, Fragment } from 'react';
import { CustomButton } from '@ui/button';
import { useScrollbarHide } from '@utils/hooks/useScrollbarHide';
import { Modal } from '@ui/modal';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { CustomImage } from '@ui/customImage';
import { capitalize } from '@utils/strings/capitalize';

import type { PokemonDetail } from '../types/types';
import { useInfinitePokemons } from '../hooks/useInfinitePokemons';

import styles from './PokemonList.module.scss';

export const PokemonList: FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);
  const { isOpen, setIsOpen } = useScrollbarHide();
  const { ref, inView } = useInView();

  const { data, error, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemons();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>{error.message}</div>;

  const handleOpenModal = async (pokemon: { name: string; url: string }) => {
    try {
      const res = await axios(pokemon.url);

      setSelectedPokemon(res.data);
      setIsOpen(true);
    } catch (error) {
      console.error('Ошибка загрузки данных покемона:', error);
    }
  };

  return (
    <>
      <div>
        <Typography as="h2" className={styles.title}>
          Pokemon list
        </Typography>

        <Typography as="ulList" listStyle="none" className={styles.flex}>
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((pokemon) => (
                <Typography as="list_item" key={pokemon.name} className={styles.base}>
                  <Card name={capitalize(pokemon.name)} imageAlt={pokemon.name}>
                    <CustomButton size="large" onClick={() => handleOpenModal(pokemon)}>
                      <Typography color="white">Info</Typography>
                    </CustomButton>
                  </Card>
                </Typography>
              ))}
            </Fragment>
          ))}
        </Typography>
      </div>

      <div ref={ref}>{isFetchingNextPage && <Typography as="lead">Loading...</Typography>}</div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedPokemon && (
          <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
              <CustomImage
                src={selectedPokemon.sprites.front_default || 'noImage'}
                alt={`${selectedPokemon.name} image`}
              />
            </div>

            <div className={styles.textWrapper}>
              <Typography as="h3" color="white">
                {capitalize(selectedPokemon.name)}
              </Typography>
              <div className={styles.textBlock}>
                <Typography color="white">
                  Height: {selectedPokemon.height}, Weight: {selectedPokemon.weight}
                </Typography>
                <Typography color="white">
                  Types: {selectedPokemon.types.map((t) => t.type.name).join(', ')}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

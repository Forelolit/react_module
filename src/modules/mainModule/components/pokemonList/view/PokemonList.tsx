import axios from 'axios';
import { Typography, Card, Modal, CustomImage, CustomButton } from '@ui/index';
import { useState, type FC, useEffect, Fragment } from 'react';
import { useScrollbarHide } from '@utils/hooks/useScrollbarHide';
import { useInView } from 'react-intersection-observer';
import { capitalize } from '@utils/strings/capitalize';
import { buttonTexts, loader, pokemonListTexts } from '@utils/constants/constants';
import { useTranslation } from 'react-i18next';

import type { PokemonDetail } from '../types/types';
import { useInfinitePokemons } from '../hooks/useInfinitePokemons';

import styles from './PokemonList.module.scss';

export const PokemonList: FC = () => {
  const { t } = useTranslation();

  const text = pokemonListTexts[0];
  const button = buttonTexts[0];

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

  if (status === 'pending') return <div>{t(loader[0])}</div>;
  if (status === 'error') return <div>{error.message}</div>;

  const handleOpenModal = async (pokemon: { name: string; url: string }) => {
    try {
      const res = await axios(pokemon.url);

      setSelectedPokemon(res.data);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Typography as="h2" className={styles.title}>
          {t(text.title)}
        </Typography>

        <Typography as="ulList" listStyle="none" className={styles.flex}>
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((pokemon) => (
                <Typography as="list_item" key={pokemon.name} className={styles.base}>
                  <Card name={capitalize(pokemon.name)} imageAlt={pokemon.name}>
                    <CustomButton size="large" onClick={() => handleOpenModal(pokemon)}>
                      <Typography color="white"> {t(button.info)}</Typography>
                    </CustomButton>
                  </Card>
                </Typography>
              ))}
            </Fragment>
          ))}
        </Typography>
      </div>

      <div ref={ref}>{isFetchingNextPage && <Typography as="lead">{t(loader[0])}</Typography>}</div>

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
                  {t(text.height)} {selectedPokemon.height}, {t(text.weight)}{' '}
                  {selectedPokemon.weight}
                </Typography>
                <Typography color="white">
                  {t(text.types)} {selectedPokemon.types.map((t) => t.type.name).join(', ')}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

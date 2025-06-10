import { Typography } from '@ui/typography'
import { useQuery } from '@tanstack/react-query'
import { CustomInput } from '@ui/input'

import { getAllPokemons } from '../api/getAllPokemons'

import styles from './PokemonList.module.scss'

export const PokemonList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: getAllPokemons,
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Typography as="h2">Pokemon list</Typography>
      <CustomInput type="text" placeholder="Enter text" />
      <Typography as="ulList">
        {data.results.map((pokemon) => (
          <Typography as="list_item" key={pokemon.name}>
            <div className={styles.base}>{pokemon.name}</div>
          </Typography>
        ))}
      </Typography>
    </>
  )
}

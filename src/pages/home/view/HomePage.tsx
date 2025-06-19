import { HeroBlock, MainBlock, PokemonList } from '@modules/mainModule';
import { Container } from '@ui/index';

export const HomePage = () => {
  return (
    <>
      <Container>
        <HeroBlock />
        <MainBlock />
        <PokemonList />
      </Container>
    </>
  );
};

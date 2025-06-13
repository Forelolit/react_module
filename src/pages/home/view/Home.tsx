import { HeroBlock, PokemonList } from '@modules/main-module';
import { Container } from '@ui/container';

export const Home = () => {
  return (
    <>
      <Container>
        <HeroBlock />
        <PokemonList />
      </Container>
    </>
  );
};

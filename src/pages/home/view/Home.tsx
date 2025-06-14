import { HeroBlock, MainBlock, PokemonList } from '@modules/main-module';
import { Container } from '@ui/container';

export const Home = () => {
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

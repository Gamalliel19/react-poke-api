import ListCard from './components/ListCard';
import PokeDetail from './components/PokeDetail';
import { Body, Title, Container } from './styled-components';

function App() {
  return (
    <Body>
      <Container>
        <Title>Pokedex!</Title>
        <PokeDetail />
        <ListCard />
      </Container>
    </Body>
  );
}

export default App;

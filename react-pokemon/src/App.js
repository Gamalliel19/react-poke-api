import ListCard from './components/ListCard';
import { Body, Title, Container } from './styled-components';

function App() {
  return (
    <Body>
      <Container>
        <Title>Pokedex!</Title>
        <ListCard />
      </Container>
    </Body>
  );
}

export default App;
